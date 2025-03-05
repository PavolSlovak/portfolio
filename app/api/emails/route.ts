import ThankYou from "@/emails/ThankYou";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thanks for reaching out! Lets Work Together! ",
      react: ThankYou({ name }),
    });
    console.log(name);
    return new Response("OK");
  } catch (error) {
    console.log("Error sending email:", error);
  }
}
