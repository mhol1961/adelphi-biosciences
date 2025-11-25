import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/lib/validations/contact";

describe("Contact Form Validation", () => {
  it("should validate correct form data", () => {
    const validData = {
      fullName: "John Smith",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      phone: "555-123-4567",
      companyType: "biotech_startup" as const,
      message: "I would like to discuss regulatory strategy for our IND submission.",
      referralSource: "LinkedIn",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid email", () => {
    const invalidData = {
      fullName: "John Smith",
      email: "not-an-email",
      companyName: "Acme Therapeutics",
      companyType: "biotech_startup",
      message: "I would like to discuss regulatory strategy.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("email");
    }
  });

  it("should reject name that is too short", () => {
    const invalidData = {
      fullName: "J",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      companyType: "pharmaceutical",
      message: "I would like to discuss regulatory strategy.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("fullName");
    }
  });

  it("should reject message that is too short", () => {
    const invalidData = {
      fullName: "John Smith",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      companyType: "pharmaceutical",
      message: "Hi",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].path).toContain("message");
    }
  });

  it("should reject invalid company type", () => {
    const invalidData = {
      fullName: "John Smith",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      companyType: "invalid_type",
      message: "I would like to discuss regulatory strategy.",
    };

    const result = contactFormSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it("should allow optional fields to be empty", () => {
    const validData = {
      fullName: "John Smith",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      phone: "",
      companyType: "biotech_startup" as const,
      message: "I would like to discuss regulatory strategy for our program.",
      referralSource: "",
    };

    const result = contactFormSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should catch honeypot field if filled", () => {
    const botData = {
      fullName: "John Smith",
      email: "john@example.com",
      companyName: "Acme Therapeutics",
      companyType: "biotech_startup" as const,
      message: "I would like to discuss regulatory strategy.",
      website: "https://spam.com", // Honeypot field filled
    };

    const result = contactFormSchema.safeParse(botData);
    expect(result.success).toBe(false);
  });
});
