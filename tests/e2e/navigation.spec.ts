import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display navigation header", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByText("Adelphi Biosciences")).toBeVisible();
  });

  test("should navigate to Services page", async ({ page }) => {
    await page.getByRole("link", { name: "Services" }).first().click();
    await expect(page).toHaveURL("/services");
    await expect(page.getByRole("heading", { name: /comprehensive regulatory/i })).toBeVisible();
  });

  test("should navigate to About page", async ({ page }) => {
    await page.getByRole("link", { name: "About" }).first().click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /about adelphi/i })).toBeVisible();
  });

  test("should navigate to Insights page", async ({ page }) => {
    await page.getByRole("link", { name: "Insights" }).first().click();
    await expect(page).toHaveURL("/insights");
    await expect(page.getByRole("heading", { name: /insights/i })).toBeVisible();
  });

  test("should navigate to Contact page", async ({ page }) => {
    await page.getByRole("link", { name: "Contact" }).first().click();
    await expect(page).toHaveURL("/contact");
    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible();
  });

  test("should display footer with links", async ({ page }) => {
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("footer").getByText(/© \d{4} adelphi biosciences/i)).toBeVisible();
  });

  test("should have working logo link to home", async ({ page }) => {
    await page.goto("/services");
    await page.getByText("Adelphi Biosciences").first().click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("should display mobile menu button", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("button", { name: /open menu/i })).toBeVisible();
  });

  test("should open and navigate via mobile menu", async ({ page }) => {
    await page.goto("/");

    // Open mobile menu
    await page.getByRole("button", { name: /open menu/i }).click();

    // Check menu is visible
    await expect(page.getByRole("dialog")).toBeVisible();

    // Navigate to services
    await page.getByRole("dialog").getByRole("link", { name: "Services" }).click();
    await expect(page).toHaveURL("/services");
  });
});
