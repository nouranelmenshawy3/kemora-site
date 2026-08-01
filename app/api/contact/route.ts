import { NextRequest, NextResponse } from 'next/server'
import {
  CONTACT_ATTACHMENT_MAX_FILES,
  CONTACT_ATTACHMENT_MAX_TOTAL_BYTES,
} from '@/lib/contactLimits'

interface Attachment {
  filename: string
  /** base64, without the data: prefix */
  content: string
}

interface ContactPayload {
  locale?: string
  name?: string
  brand?: string
  email?: string
  whatsapp?: string
  country?: string
  preferredLanguage?: string
  productCategory?: string
  quantity?: string
  hasDesigns?: string
  message?: string
  consent?: boolean
  attachments?: Attachment[]
}

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@kemoratex.com'
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'Kemora Website <website@kemoratex.com>'

/** Mirrors the client-side limits in components/site/InquiryForm.tsx. */
const MAX_FILES = CONTACT_ATTACHMENT_MAX_FILES
const MAX_TOTAL_BYTES = CONTACT_ATTACHMENT_MAX_TOTAL_BYTES
const MAX_FIELD_LENGTH = 5000
const ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.pdf']

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const clean = (value: unknown): string =>
  typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : ''

/** Strip any path components so a filename cannot traverse or spoof a path. */
const safeFilename = (name: string) =>
  name.replace(/[/\\]/g, '_').replace(/[^\w.\- ]/g, '').slice(0, 120) || 'attachment'

function validateAttachments(input: unknown): { ok: true; files: Attachment[] } | { ok: false } {
  if (!Array.isArray(input) || input.length === 0) return { ok: true, files: [] }
  if (input.length > MAX_FILES) return { ok: false }

  let total = 0
  const files: Attachment[] = []

  for (const raw of input) {
    if (!raw || typeof raw !== 'object') return { ok: false }
    const filename = safeFilename(clean((raw as Attachment).filename))
    const content = (raw as Attachment).content

    if (typeof content !== 'string' || !/^[A-Za-z0-9+/]*={0,2}$/.test(content)) return { ok: false }
    if (!ALLOWED_EXTENSIONS.some((ext) => filename.toLowerCase().endsWith(ext))) return { ok: false }

    // base64 decodes to roughly 3/4 of its encoded length.
    total += Math.floor((content.length * 3) / 4)
    if (total > MAX_TOTAL_BYTES) return { ok: false }

    files.push({ filename, content })
  }

  return { ok: true, files }
}

export async function POST(request: NextRequest) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const name = clean(body.name)
  const email = clean(body.email)
  const message = clean(body.message)

  if (!name || !email || !message || !body.consent) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const attachmentResult = validateAttachments(body.attachments)
  if (!attachmentResult.ok) {
    return NextResponse.json({ error: 'Invalid or oversized attachments' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Email service is not configured. Missing RESEND_API_KEY.')
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
  }

  const notProvided = '—'
  const fields: [string, string][] = [
    ['Name', name],
    ['Brand', clean(body.brand) || notProvided],
    ['Email', email],
    ['WhatsApp', clean(body.whatsapp) || notProvided],
    ['Country', clean(body.country) || notProvided],
    ['Preferred language', clean(body.preferredLanguage) || notProvided],
    ['Product category', clean(body.productCategory) || notProvided],
    ['Estimated quantity', clean(body.quantity) || notProvided],
    ['Has designs', clean(body.hasDesigns) || notProvided],
    ['Site language', clean(body.locale) || 'en'],
    ['Attachments', String(attachmentResult.files.length)],
  ]

  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Africa/Cairo',
  })

  const text = [
    'New Kemora website enquiry',
    '',
    ...fields.map(([label, value]) => `${label}: ${value}`),
    `Submitted: ${submittedAt} Africa/Cairo`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f1923; line-height: 1.55;">
      <h2 style="margin: 0 0 16px;">New Kemora website enquiry</h2>
      ${fields
        .map(
          ([label, value]) =>
            `<p style="margin:4px 0;"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
        )
        .join('')}
      <p style="margin:4px 0;"><strong>Submitted:</strong> ${escapeHtml(submittedAt)} Africa/Cairo</p>
      <hr style="border: 0; border-top: 1px solid #e2ddd6; margin: 20px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New Kemora enquiry from ${name}`,
        text,
        html,
        ...(attachmentResult.files.length > 0
          ? { attachments: attachmentResult.files }
          : {}),
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('Failed to send Kemora enquiry email:', error)
      return NextResponse.json({ error: 'Failed to send enquiry email' }, { status: 502 })
    }
  } catch (error) {
    console.error('Failed to reach email service:', error)
    return NextResponse.json({ error: 'Failed to send enquiry email' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
