import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { supabase } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate form data
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Check honeypot field
    if (data.website && data.website.length > 0) {
      // Silently accept but don't process (bot trap)
      return NextResponse.json({ success: true });
    }

    // Store in Supabase (if configured)
    if (supabase) {
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        full_name: data.fullName,
        email: data.email,
        company_name: data.companyName,
        phone: data.phone || null,
        company_type: data.companyType,
        message: data.message,
        referral_source: data.referralSource || null,
        status: "new",
      });

      if (dbError) {
        console.error("Database error:", dbError);
        return NextResponse.json(
          {
            success: false,
            error: "Failed to save submission. Please try again.",
          },
          { status: 500 }
        );
      }
    } else {
      console.warn("Supabase not configured - skipping database storage");
    }

    // Send email notification
    try {
      await sendContactNotification({
        fullName: data.fullName,
        email: data.email,
        companyName: data.companyName,
        phone: data.phone,
        companyType: data.companyType,
        message: data.message,
        referralSource: data.referralSource,
      });
    } catch (emailError) {
      // Log but don't fail - the submission was saved
      console.error("Email notification error:", emailError);
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your inquiry. We will be in touch within 24 business hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
