import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  company?: string
  email: string
  message: string
  consent: boolean
}

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'hello@kemoratex.com'
const CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || 'Kemora Website <website@kemoratex.com>'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, message, consent } = body
  const company = body.company?.trim() || 'Not provided'

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Email service is not configured. Missing RESEND_API_KEY.')
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 })
  }

  const submittedAt = new Date().toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Europe/Warsaw',
  })

  const text = [
    'New Kemora website inquiry',
    '',
    `Name: ${name.trim()}`,
    `Company: ${company}`,
    `Email: ${email.trim()}`,
    `Submitted: ${submittedAt} Europe/Warsaw`,
    '',
    'Message:',
    message.trim(),
  ].join('\n')

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f1923; line-height: 1.55;">
      <h2 style="margin: 0 0 16px;">New Kemora website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)} Europe/Warsaw</p>
      <hr style="border: 0; border-top: 1px solid #e2ddd6; margin: 20px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(message.trim())}</p>
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
        reply_to: email.trim(),
        subject: `New Kemora inquiry from ${name.trim()}`,
        text,
        html,
      }),
    })

    if (!emailResponse.ok) {
      const error = await emailResponse.text()
      console.error('Failed to send Kemora inquiry email:', error)
      return NextResponse.json({ error: 'Failed to send inquiry email' }, { status: 502 })
    }
  } catch (error) {
    console.error('Failed to reach email service:', error)
    return NextResponse.json({ error: 'Failed to send inquiry email' }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
