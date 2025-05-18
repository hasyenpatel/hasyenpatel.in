import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL || 'ruqwerty55@gmail.com';

export async function POST(req: Request) {
        try {
                const { name, email, message } = await req.json();

                // Validate input
                if (!name || !email || !message) {
                        return NextResponse.json(
                                { error: 'Missing required fields' },
                                { status: 400 }
                        );
                }

                // Send email using Resend
                const { data, error } = await resend.emails.send({
                        from: 'Contact Form <onboarding@resend.dev>',
                        to: [toEmail],
                        subject: `Website Contact: ${name}`,
                        text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
                        html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2563eb;">New message from your website</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f9fafb; border-radius: 5px;">
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  </div>
</div>
      `,
                });

                if (error) {
                        console.error('Resend API error:', error);
                        return NextResponse.json(
                                { error: 'Failed to send email' },
                                { status: 500 }
                        );
                }

                return NextResponse.json(
                        { success: true, message: 'Email sent successfully' },
                        { status: 200 }
                );

        } catch (error) {
                console.error('Error in contact API route:', error);
                return NextResponse.json(
                        { error: 'Internal server error' },
                        { status: 500 }
                );
        }
} 