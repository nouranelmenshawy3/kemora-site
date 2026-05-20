import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  company?: string
  email: string
  message: string
  consent: boolean
}

export async function POST(request: NextRequest) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { name, email, message, consent } = body

  // Basic server-side validation
  if (!name?.trim() || !email?.trim() || !message?.trim() || !consent) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }

  // Log the inquiry (replace with your email service: Resend, Nodemailer, etc.)
  console.log('📩 New Kemora inquiry:', {
    name: body.name,
    company: body.company || '—',
    email: body.email,
    message: body.message,
    timestamp: new Date().toISOString(),
  })

  /*
   * To send emails, integrate a service here. Example with Resend:
   *
   * import { Resend } from 'resend'
   * const resend = new Resend(process.env.RESEND_API_KEY)
   * await resend.emails.send({
   *   from: 'website@kemora-eg.com',
   *   to: 'nouran@kemora-eg.com',
   *   subject: `New inquiry from ${name}`,
   *   text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\n${message}`,
   * })
   */

  return NextResponse.json({ success: true })
}
