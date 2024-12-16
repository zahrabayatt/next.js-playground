import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";

const resend = new Resend(process.env.RESENT_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "..",
      to: "zahra.bayat13799@gmail.com",
      subject: "Welcome!!!",
      react: WelcomeTemplate({ name: "Zahra" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
// In this demonstration, we will create an API endpoint for sending emails. However, in a real application, it is not advisable to have a dedicated endpoint solely for sending emails. Instead, email sending should be integrated into your business operations. For instance, when a user places an order, a confirmation email should be sent as part of the order submission process.
