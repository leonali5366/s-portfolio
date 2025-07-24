// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject, redesign, reference } = await req.json();

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use any email service provider you want
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Format the select options for display
    const redesignText = redesign === 'yes' ? 'Yes' : 'No';
    const referenceText = reference === 'yes' ? 'Yes' : 'No';

    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Replace with your email
      subject: `New Contact Form Submission: ${subject}`,
      text: `
You have a new message from ${name} (${email}):

Subject: ${subject}

Redesign existing website: ${redesignText}
Has reference material: ${referenceText}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name} (${email})</p>
  <p><strong>Subject:</strong> ${subject}</p>
  
  <div style="margin: 20px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 15px 0;">
    <p><strong>Project Details:</strong></p>
    <p>Wants to redesign existing website: <strong>${redesignText}</strong></p>
    <p>Has Figma design/competitor reference: <strong>${referenceText}</strong></p>
  </div>
  
  <p><strong>Message:</strong></p>
  <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #e74c3c;">
    ${message.replace(/\n/g, '<br>')}
  </div>
</div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Something went wrong. Please try again." }),
      { status: 500 }
    );
  }
}