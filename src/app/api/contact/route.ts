import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; subject?: string; message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = sanitize(body.name ?? "");
  const email = sanitize(body.email ?? "");
  const subject = sanitize(body.subject ?? "");
  const message = sanitize(body.message ?? "");

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { error: "One or more fields exceed maximum length." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  const contactEmail = process.env.CONTACT_EMAIL || "physiotherapon@gmail.com";

  const htmlBody = `
    <p><strong>Όνομα:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Θέμα:</strong> ${subject}</p>
    <p><strong>Μήνυμα:</strong> ${message}</p>
  `;

  const textBody = `Όνομα: ${name}\nEmail: ${email}\nΘέμα: ${subject}\nΜήνυμα: ${message}`;

  try {
    await transporter.sendMail({
      from: `"Physiotherapon Website" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: contactEmail,
      subject: `Physiotherapon Contact Form: ${subject}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
