import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'

// Run the real route with an isolated email transport. No test sends an email.
const require = createRequire(import.meta.url)
const root = new URL('../', import.meta.url)
const compile = (file) => ts.transpileModule(readFileSync(new URL(file, root), 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText
const limits = { exports: {} }
vm.runInNewContext(compile('lib/contactLimits.ts'), { exports: limits.exports })
const source = compile('app/api/contact/route.ts')

function setup({ configured = true, delivery = 'ok' } = {}) {
  const calls = []
  const routeModule = { exports: {} }
  vm.runInNewContext(source, {
    exports: routeModule.exports,
    require: (id) => id === '@/lib/contactLimits' ? limits.exports : require(id),
    process: { env: configured ? { RESEND_API_KEY: 'test-only-not-a-real-key' } : {} },
    console: { error() {} },
    fetch: async (url, options) => {
      calls.push({ url, body: JSON.parse(options.body) })
      if (delivery === 'throw') throw new Error('Simulated provider outage')
      return new Response('{}', { status: delivery === 'ok' ? 200 : 503 })
    },
  })
  return {
    calls,
    send: (body) => routeModule.exports.POST({ json: async () => body }),
    malformed: () => routeModule.exports.POST({ json: async () => { throw new Error('Invalid JSON') } }),
  }
}

const dateAfter = (days) => {
  const date = new Date()
  date.setUTCDate(date.getUTCDate() + days)
  return date.toISOString().slice(0, 10)
}
const project = { name: 'Website test', email: 'test@example.com', consent: true, message: 'Test project brief', inquiryType: 'project' }
const meeting = { ...project, inquiryType: 'meeting', preferredMeetingDate: dateAfter(3), preferredMeetingTime: 'afternoon', timezone: 'Europe/Warsaw' }

test('project enquiry reaches the email transport with correct routing', async () => {
  const app = setup()
  const response = await app.send(project)
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { success: true })
  assert.equal(app.calls.length, 1)
  assert.equal(app.calls[0].url, 'https://api.resend.com/emails')
  assert.deepEqual(app.calls[0].body.to, ['info@kemoratex.com'])
  assert.equal(app.calls[0].body.reply_to, project.email)
  assert.match(app.calls[0].body.subject, /New Kemora enquiry/)
})

test('meeting request includes the requested date, time and timezone', async () => {
  const app = setup()
  assert.equal((await app.send(meeting)).status, 200)
  assert.match(app.calls[0].body.subject, /Consultation request/)
  for (const value of [meeting.preferredMeetingDate, meeting.preferredMeetingTime, meeting.timezone]) {
    assert.ok(app.calls[0].body.text.includes(value))
  }
})

for (const [label, payload] of [
  ['null', null], ['array', []], ['string', 'invalid'],
  ['missing name', { ...project, name: '' }],
  ['invalid email', { ...project, email: 'invalid' }],
  ['missing consent', { ...project, consent: false }],
  ['string consent', { ...project, consent: 'false' }],
  ['empty brief', { ...project, message: '' }],
  ['same-day meeting', { ...meeting, preferredMeetingDate: dateAfter(0) }],
  ['next-day meeting', { ...meeting, preferredMeetingDate: dateAfter(1) }],
  ['impossible date', { ...meeting, preferredMeetingDate: '2099-02-30' }],
  ['missing timezone', { ...meeting, timezone: '' }],
  ['invalid time window', { ...meeting, preferredMeetingTime: 'now' }],
  ['disallowed attachment', { ...project, attachments: [{ filename: 'test.exe', content: 'dGVzdA==' }] }],
]) {
  test(`rejects ${label} without emailing`, async () => {
    const app = setup()
    assert.equal((await app.send(payload)).status, 400)
    assert.equal(app.calls.length, 0)
  })
}

test('invalid JSON returns 400', async () => {
  assert.equal((await setup().malformed()).status, 400)
})
test('minimum allowed date is accepted', async () => {
  assert.equal((await setup().send({ ...meeting, preferredMeetingDate: dateAfter(limits.exports.CONSULTATION_MIN_NOTICE_DAYS) })).status, 200)
})
test('an attachment can replace a written brief and is forwarded', async () => {
  const app = setup()
  assert.equal((await app.send({ ...project, message: '', attachments: [{ filename: 'reference.pdf', content: 'JVBERi0xLjQ=' }] })).status, 200)
  assert.equal(app.calls[0].body.attachments[0].filename, 'reference.pdf')
})
test('user content is escaped in HTML email', async () => {
  const app = setup()
  await app.send({ ...project, name: '<script>test</script>' })
  assert.ok(!app.calls[0].body.html.includes('<script>'))
  assert.ok(app.calls[0].body.html.includes('&lt;script&gt;'))
})
test('missing configuration never reports success', async () => {
  assert.equal((await setup({ configured: false }).send(project)).status, 500)
})
for (const delivery of ['reject', 'throw']) {
  test(`email provider ${delivery} never reports success`, async () => {
    assert.equal((await setup({ delivery }).send(project)).status, 502)
  })
}
