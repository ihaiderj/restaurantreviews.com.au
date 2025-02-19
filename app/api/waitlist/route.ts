import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email template styles
    const emailStyles = `
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .header {
          background: #3b82f6;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          background: #ffffff;
          padding: 20px;
          border: 1px solid #e5e7eb;
          border-radius: 0 0 8px 8px;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          color: #666;
        }
      </style>
    `

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'valuesinfotech@gmail.com',
      subject: 'New Waitlist Signup - Restaurant Reviews App',
      html: `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">New Waitlist Signup</h2>
          </div>
          <div class="content">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Signup Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div class="footer">
            <p>Restaurant Reviews - Waitlist Notification</p>
          </div>
        </div>
      `,
    })

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Restaurant Reviews Waitlist',
      html: `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">Welcome to Restaurant Reviews!</h2>
          </div>
          <div class="content">
            <p>Thank you for joining our waitlist! We're excited to have you as one of our early supporters.</p>
            <p>We'll keep you updated on our launch and you'll be among the first to know when we're ready.</p>
            <p>Best regards,<br>Restaurant Reviews Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Restaurant Reviews. All rights reserved.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Waitlist submission error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
} 