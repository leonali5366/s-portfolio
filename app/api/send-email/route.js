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
      recaptcha,
    } = await req.json();

    // ✅ Verify reCAPTCHA token
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptcha}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaVerify.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response(
        JSON.stringify({ message: "reCAPTCHA verification failed" }),
        { status: 400 }
      );
    }

    // Nodemailer transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const redesignText = redesign === "yes" ? "Yes" : "No";
    const referenceText = reference === "yes" ? "Yes" : "No";

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>Redesign existing website: ${redesignText}</p>
        ${redesignLink ? `<p>Redesign Link: ${redesignLink}</p>` : ""}
        <p>Has reference material: ${referenceText}</p>
        ${referenceLink ? `<p>Reference Link: ${referenceLink}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

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
