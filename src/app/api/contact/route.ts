import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, website, social, message } = body;

    await resend.emails.send({
      from: "TaghdisiLabs <onboarding@resend.dev>",
      to: ["info@taghdisilabs.digital"],
      subject: `New Lead: ${name}`,
      html: `
        <h2>New Client Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Website:</b> ${website}</p>
        <p><b>Social:</b> ${social}</p>

        <hr />

        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}