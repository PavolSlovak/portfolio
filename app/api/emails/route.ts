import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GOOGLE_PASSWORD, // Use the app password generated in Step 1
  },
});

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body from the request
    const { name, email, company, message } = await req.json();
    console.log(name, email, company, message);
    // Validate that required fields exist
    if (!email) {
      // This error will also fix the "No recipients defined" error if email is missing
      return new Response(
        JSON.stringify({
          success: false,
          message: "Recipient email is required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const jobOfferHTML = jobOfferEmailTemplate({
      name,
      email,
      company,
      message,
    });
    const thankYouHTML = thankYouTemplate({ name, email, company, message });

    // Sending email using Nodemailer

    const responseThankYouEmail: SMTPTransport.SentMessageInfo =
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: email, // Ensure a valid email is passed
        subject: `Thank you for reaching out!`,
        text: message,
        html: thankYouHTML,
      });

    const responseOfferEmail: SMTPTransport.SentMessageInfo =
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: process.env.EMAIL, // Ensure a valid email is passed
        subject: `Job offer from ${company}`,
        text: message,
        html: jobOfferHTML,
      });
    console.log("Email sent successfully to:", email);

    // Return a successful JSON response
    return new Response(
      JSON.stringify({
        success: true,
        responseThankYouEmail,
        responseOfferEmail,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server Error!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

type TOfferEmail = {
  name: string;
  email: string;
  company: string;
  message: string;
};

function jobOfferEmailTemplate({ name, company, message, email }: TOfferEmail) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #2E86C1; text-align: center;">Job Offer from ${company}</h2>
      <p>Hello <strong>Pavol</strong>,</p>
      <p>You recieved a new job offer from your portolio page:</p>
      
      <blockquote style="background: #f9f9f9; border-left: 4px solid #2E86C1; padding: 10px; font-style: italic;">
        "${message}"
      </blockquote>

      <p>We will get back to you shortly.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd;">
      
      <p style="text-align: center; font-size: 14px; color: #777;">
        Best regards, <br>
        <strong>${name}</strong><br>
        <a href="mailfrom:${email}" style="color: #2E86C1; text-decoration: none;">${process.env.EMAIL}</a>
      </p>
    </div>
  `;
}
function thankYouTemplate({ name, message }: TOfferEmail) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #2E86C1; text-align: center;">Thank you for reaching out!</h2>
      <p>Hello <strong>${name}</strong>,</p>
      <p>We have received your message and appreciate your interest.</p>
      
      <blockquote style="background: #f9f9f9; border-left: 4px solid #2E86C1; padding: 10px; font-style: italic;">
        "${message}"
      </blockquote>

      <p>We will get back to you shortly.</p>
      
      <hr style="border: none; border-top: 1px solid #ddd;">
      
      <p style="text-align: center; font-size: 14px; color: #777;">
        Best regards, <br>
        <strong>Pavol Slovak</strong><br>
        <a href="mailto:${process.env.EMAIL}" style="color: #2E86C1; text-decoration: none;">${process.env.EMAIL}</a>
      </p>
    </div>
  `;
}
