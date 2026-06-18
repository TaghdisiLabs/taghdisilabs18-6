import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "your@email.com",
    subject: "New Contact Form",
    html: `
      <h3>New Lead</h3>
      <p>Name: ${body.name}</p>
      <p>Email: ${body.email}</p>
      <p>Message: ${body.message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
