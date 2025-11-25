import { Resend } from "resend";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactEmailData {
  fullName: string;
  email: string;
  companyName: string;
  phone?: string;
  companyType: string;
  message: string;
  referralSource?: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  const contactEmail = process.env.CONTACT_EMAIL || "info@adelphibiosciences.com";

  const companyTypeLabels: Record<string, string> = {
    biotech_startup: "Biotech Startup",
    pharmaceutical: "Pharmaceutical Company",
    life_science_investor: "Life Science Investor",
    academic: "Academic Institution",
    other: "Other",
  };

  const htmlContent = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #1B365D; border-bottom: 2px solid #4A90A4; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2D3748;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
            <a href="mailto:${data.email}" style="color: #4A90A4;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2D3748;">${data.companyName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company Type:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2D3748;">${companyTypeLabels[data.companyType] || data.companyType}</td>
        </tr>
        ${
          data.phone
            ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2D3748;">${data.phone}</td>
        </tr>
        `
            : ""
        }
        ${
          data.referralSource
            ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Referral Source:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #2D3748;">${data.referralSource}</td>
        </tr>
        `
            : ""
        }
      </table>

      <div style="margin-top: 20px;">
        <h3 style="color: #1B365D; margin-bottom: 10px;">Message:</h3>
        <div style="background-color: #F7FAFC; padding: 15px; border-radius: 8px; color: #2D3748; white-space: pre-wrap;">
${data.message}
        </div>
      </div>

      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
        <p>This email was sent from the Adelphi Biosciences website contact form.</p>
        <p>Reply directly to this email to respond to ${data.fullName}.</p>
      </div>
    </div>
  `;

  const textContent = `
New Contact Form Submission

Name: ${data.fullName}
Email: ${data.email}
Company: ${data.companyName}
Company Type: ${companyTypeLabels[data.companyType] || data.companyType}
${data.phone ? `Phone: ${data.phone}` : ""}
${data.referralSource ? `Referral Source: ${data.referralSource}` : ""}

Message:
${data.message}

---
This email was sent from the Adelphi Biosciences website contact form.
Reply directly to this email to respond to ${data.fullName}.
  `;

  if (!resend) {
    console.warn("Resend not configured - skipping email notification");
    return;
  }

  await resend.emails.send({
    from: "Adelphi Biosciences <notifications@adelphibiosciences.com>",
    to: contactEmail,
    replyTo: data.email,
    subject: `New Inquiry from ${data.companyName}`,
    html: htmlContent,
    text: textContent,
  });
}
