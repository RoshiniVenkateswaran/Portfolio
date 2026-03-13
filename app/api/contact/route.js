import { NextResponse } from 'next/server'

// When using onboarding@resend.dev, CONTACT_EMAIL must match the email you used to sign up for Resend (e.g. roshiniv@gwmail.gwu.edu).
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'roshiniv@gwu.edu'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const nameStr = name?.trim()
    const emailStr = email?.trim()
    const messageStr = message?.trim()
    if (!nameStr || !emailStr || !messageStr) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailStr)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service is not configured. Please set RESEND_API_KEY.' },
        { status: 503 }
      )
    }

    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: emailStr,
      subject: `Portfolio: Message from ${escapeHtml(nameStr)}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
        <p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(messageStr).replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      const msg = getErrorMessage(error, 'Resend rejected the email.')
      return NextResponse.json({ error: msg }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact API error:', err)
    const msg = getErrorMessage(err, 'Unable to send. Please try again or email me directly.')
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

function getErrorMessage(err, fallback) {
  if (err?.message) return String(err.message)
  if (typeof err === 'string') return err
  if (err?.error?.message) return String(err.error.message)
  if (err?.errors?.[0]?.message) return String(err.errors[0].message)
  return fallback
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }
  return String(text).replace(/[&<>"']/g, (m) => map[m])
}
