import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display hero section with correct content", async ({ page }) => {
    // Check hero headline
    await expect(
      page.getByRole("heading", { name: /strategic regulatory affairs/i })
    ).toBeVisible();

    // Check subheadline
    await expect(page.getByText(/from ind to fda approval/i)).toBeVisible();

    // Check CTA buttons
    await expect(page.getByRole("link", { name: /schedule a consultation/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /explore services/i })).toBeVisible();
  });

  test("should display credibility banner", async ({ page }) => {
    await expect(page.getByText(/named on fda approval letter/i)).toBeVisible();
    await expect(page.getByText(/us patent holder/i)).toBeVisible();
    await expect(page.getByText(/20\+ years/i)).toBeVisible();
  });

  test("should display services overview section", async ({ page }) => {
    await expect(page.getByText(/comprehensive regulatory services/i)).toBeVisible();
    await expect(page.getByText(/regulatory strategy/i).first()).toBeVisible();
    await expect(page.getByText(/submission support/i).first()).toBeVisible();
  });

  test("should navigate to contact page from CTA", async ({ page }) => {
    await page.getByRole("link", { name: /schedule a consultation/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });

  test("should have proper meta tags for SEO", async ({ page }) => {
    // Check title
    const title = await page.title();
    expect(title).toContain("Adelphi Biosciences");

    // Check meta description
    const description = await page
      .locator('meta[name="description"]')
      .getAttribute("content");
    expect(description).toContain("regulatory");
  });
});
