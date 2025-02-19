import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email validation function
function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' }, 
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3'
      }
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@restaurantreviews.com.au',
      cc: process.env.CC_EMAIL, // Add CC if configured
      bcc: process.env.BCC_EMAIL, // Add BCC if configured
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form submission error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
} 