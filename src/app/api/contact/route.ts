import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.string().min(1),
  serviceType: z.string().min(1),
  guests: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the data
    const validatedData = contactSchema.parse(body);

    // Log the data (in production, you would send an email here)
    console.log("New contact form submission:", validatedData);

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Chef Francis <contact@cheffrancis.com>',
    //   to: 'reservations@cheffrancis.com',
    //   subject: `Nouvelle demande de ${validatedData.name}`,
    //   html: `...`,
    // });

    return NextResponse.json(
      { message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { message: "Données invalides", errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
