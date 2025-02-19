import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email validation function
function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, userType, restaurantName, contactPerson, address, phone } = body

    // Validate email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' }, 
        { status: 400 }
      )
    }

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
        .info-item {
          margin: 10px 0;
          padding: 10px;
          background: #f8fafc;
          border-radius: 4px;
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

    // Admin email templates
    const adminEmailContent = userType === 'foodie' 
      ? `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">New Early Access Request</h2>
          </div>
          <div class="content">
            <div class="info-item">
              <strong>Account Type:</strong> Food Lover
            </div>
            <div class="info-item">
              <strong>Name:</strong> ${firstName} ${lastName}
            </div>
            <div class="info-item">
              <strong>Email:</strong> ${email}
            </div>
          </div>
          <div class="footer">
            <p>Restaurant Reviews - Early Access Program</p>
          </div>
        </div>
      `
      : `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">New Restaurant Registration</h2>
          </div>
          <div class="content">
            <div class="info-item">
              <strong>Account Type:</strong> Restaurant Owner
            </div>
            <div class="info-item">
              <strong>Restaurant Name:</strong> ${restaurantName}
            </div>
            <div class="info-item">
              <strong>Contact Person:</strong> ${contactPerson || 'Not provided'}
            </div>
            <div class="info-item">
              <strong>Email:</strong> ${email}
            </div>
            <div class="info-item">
              <strong>Phone:</strong> ${phone || 'Not provided'}
            </div>
            <div class="info-item">
              <strong>Address:</strong> ${address || 'Not provided'}
            </div>
          </div>
          <div class="footer">
            <p>Restaurant Reviews - Early Access Program</p>
          </div>
        </div>
      `

    // User confirmation email templates
    const userEmailContent = userType === 'foodie'
      ? `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">Welcome to Restaurant Reviews!</h2>
          </div>
          <div class="content">
            <p>Dear ${firstName},</p>
            <p>Thank you for joining our early access program! We're thrilled to have you as one of our first users.</p>
            <div class="info-item">
              <h3 style="margin-top:0;">Your Benefits:</h3>
              <ul style="margin:0;padding-left:20px;">
                <li>Free premium account for life</li>
                <li>Exclusive access to special offers</li>
                <li>Early bird rewards and points</li>
                <li>Priority customer support</li>
              </ul>
            </div>
            <p>We'll be in touch shortly with your access details and next steps.</p>
            <p>Best regards,<br>Restaurant Reviews Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Restaurant Reviews. All rights reserved.</p>
          </div>
        </div>
      `
      : `
        ${emailStyles}
        <div class="email-container">
          <div class="header">
            <h2 style="margin:0;">Welcome to Restaurant Reviews!</h2>
          </div>
          <div class="content">
            <p>Dear ${contactPerson || 'Restaurant Owner'},</p>
            <p>Thank you for registering <strong>${restaurantName}</strong> for our early access program!</p>
            <div class="info-item">
              <h3 style="margin-top:0;">Your Benefits:</h3>
              <ul style="margin:0;padding-left:20px;">
                <li>1 year free premium listing ($599 value)</li>
                <li>Unlimited special offers creation</li>
                <li>Unlimited photo uploads</li>
                <li>Priority placement in search results</li>
                <li>Advanced analytics and insights</li>
              </ul>
            </div>
            <p>We'll be in touch shortly with your access details and next steps for setting up your restaurant profile.</p>
            <p>Best regards,<br>Restaurant Reviews Team</p>
          </div>
          <div class="footer">
            <p>© 2024 Restaurant Reviews. All rights reserved.</p>
          </div>
        </div>
      `

    // Send emails...
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'support@restaurantreviews.com.au',
      cc: process.env.CC_EMAIL,
      bcc: process.env.BCC_EMAIL,
      subject: 'Early Access Request for Restaurant Review App',
      html: adminEmailContent,
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Restaurant Reviews Early Access',
      html: userEmailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Early access submission error:', error)
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
} 