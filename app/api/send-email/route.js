// app/api/send-email/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject } = await req.json();

    // Setup Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use any email service provider you want
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: process.env.EMAIL_USER, // Replace with your email
      subject: `${subject}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
      html: `<p>You have a new message from <strong>${name}</strong> (${email})</p><p><strong>Message:</strong><br>${message}</p>`,
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
