import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(200, "Company name must be less than 200 characters"),
  phone: z
    .string()
    .max(20, "Phone number must be less than 20 characters")
    .optional()
    .or(z.literal("")),
  companyType: z.enum(
    ["biotech_startup", "pharmaceutical", "life_science_investor", "academic", "other"],
    {
      message: "Please select a company type",
    }
  ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters"),
  referralSource: z.string().max(200).optional().or(z.literal("")),
  // Honeypot field - should be empty
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const companyTypes = [
  { value: "biotech_startup", label: "Biotech Startup" },
  { value: "pharmaceutical", label: "Pharmaceutical Company" },
  { value: "life_science_investor", label: "Life Science Investor" },
  { value: "academic", label: "Academic Institution" },
  { value: "other", label: "Other" },
] as const;
