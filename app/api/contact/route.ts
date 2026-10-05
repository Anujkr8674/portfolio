import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Assuming gmail from the email address provided
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Admin Email HTML Template
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #333333; padding: 20px;">
        <h2 style="color: #111111; border-bottom: 1px solid #eeeeee; padding-bottom: 10px;">New Contact Form Submission</h2>
        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #22d3ee;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p style="margin: 5px 0;"><strong>Service:</strong> ${service || 'Not specified'}</p>
        </div>
        <div style="margin: 20px 0;">
          <p style="font-weight: bold; color: #111111; margin-bottom: 5px;">Message:</p>
          <p style="font-size: 14px; line-height: 1.5; margin-top: 0; padding: 15px; background-color: #f9f9f9; border: 1px solid #eeeeee; border-radius: 4px;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      </div>
    `;

    // User Confirmation Email HTML Template
    const userHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #333333; padding: 20px;">
        <h2 style="color: #111111; border-bottom: 1px solid #eeeeee; padding-bottom: 10px;">Hi ${name},</h2>
        <p style="font-size: 16px; line-height: 1.5;">Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
        
        <div style="margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #22d3ee;">
          <p style="font-size: 14px; margin-top: 0; color: #666666;">Your message:</p>
          <p style="font-size: 14px; line-height: 1.5; margin-bottom: 0;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
        
        <p style="font-size: 16px;">Best regards,<br/><strong>Anuj Kumar</strong><br/>Full Stack Developer</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eeeeee; font-size: 12px; color: #888888;">
          <p style="margin: 5px 0;"><strong>Email:</strong> anujkumar.techdev@gmail.com</p>
          <p style="margin: 5px 0;"><strong>GitHub:</strong> <a href="https://github.com/Anujkr8674" style="color: #22d3ee; text-decoration: none;">github.com/Anujkr8674</a></p>
          <p style="margin: 5px 0;"><strong>Portfolio:</strong> <a href="https://portfolio-flame-mu-94.vercel.app/" style="color: #22d3ee; text-decoration: none;">portfolio-flame-mu-94.vercel.app</a></p>
        </div>
      </div>
    `;

    // Send email to Admin
    await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.SMTP_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Message from ${name}`,
      html: adminHtml,
    });

    // Send confirmation email to User
    await transporter.sendMail({
      from: `"Anuj Kumar" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: `Thank you for reaching out!`,
      html: userHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
