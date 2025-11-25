import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display contact form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible();
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/company name/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  });

  test("should show validation errors for empty required fields", async ({ page }) => {
    // Try to submit empty form
    await page.getByRole("button", { name: /send message/i }).click();

    // Check for validation errors
    await expect(page.getByText(/name must be at least/i)).toBeVisible();
    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test("should show error for invalid email format", async ({ page }) => {
    await page.getByLabel(/full name/i).fill("John Smith");
    await page.getByLabel(/email/i).fill("not-an-email");
    await page.getByLabel(/company name/i).fill("Acme Therapeutics");
    await page.getByLabel(/message/i).fill("Test message for validation testing purposes.");

    await page.getByRole("button", { name: /send message/i }).click();

    await expect(page.getByText(/please enter a valid email/i)).toBeVisible();
  });

  test("should display contact information cards", async ({ page }) => {
    await expect(page.getByText(/info@adelphibiosciences.com/i)).toBeVisible();
    await expect(page.getByText(/response time/i)).toBeVisible();
    await expect(page.getByText(/24 business hours/i)).toBeVisible();
  });

  test("should be accessible", async ({ page }) => {
    // Check form labels are properly associated
    const nameInput = page.getByLabel(/full name/i);
    await expect(nameInput).toHaveAttribute("id", "fullName");

    const emailInput = page.getByLabel(/email/i);
    await expect(emailInput).toHaveAttribute("id", "email");
  });
});

test.describe("Contact Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should display form correctly on mobile", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible();
    await expect(page.getByLabel(/full name/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible();
  });
});
