import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
      email,
      message,
      subject,
      redesign,
      reference,
      redesignLink,
      referenceLink,
      recaptchaToken,
    } = await req.json();

    // Validate required fields
    if (!name || !email || !message || !subject || !recaptchaToken) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`,
      { 
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    );
    
    const recaptchaData = await recaptchaVerify.json();

    if (!recaptchaData.success) {
      console.error("reCAPTCHA verification failed:", recaptchaData);
      return new Response(
        JSON.stringify({ 
          message: "Failed to verify you're not a robot. Please try again." 
        }),
        { status: 400 }
      );
    }

    // Optional: Check score threshold (adjust based on your needs)
    if (recaptchaData.score < 0.5) {
      console.warn("Low reCAPTCHA score:", recaptchaData.score);
      return new Response(
        JSON.stringify({ 
          message: "Suspicious activity detected. Please try again." 
        }),
        { status: 400 }
      );
    }

    // Create Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Prepare email content
    const redesignText = redesign === "yes" ? "Yes" : "No";
    const referenceText = reference === "yes" ? "Yes" : "No";

    const mailOptions = {
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Redesign existing website:</strong> ${redesignText}</p>
          ${redesignLink ? `<p><strong>Redesign Link:</strong> <a href="${redesignLink}">${redesignLink}</a></p>` : ""}
          <p><strong>Has reference material:</strong> ${referenceText}</p>
          ${referenceLink ? `<p><strong>Reference Link:</strong> <a href="${referenceLink}">${referenceLink}</a></p>` : ""}
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-line; background: #f3f4f6; padding: 12px; border-radius: 4px; margin-top: 8px;">
            ${message}
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #6b7280;">
            reCAPTCHA verification: ${recaptchaData.success ? "Passed" : "Failed"} 
            (Score: ${recaptchaData.score.toFixed(2)})
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return new Response(
      JSON.stringify({ 
        message: "An error occurred while sending your message. Please try again later." 
      }),
      { status: 500 }
    );
  }
}