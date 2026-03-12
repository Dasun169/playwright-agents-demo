// spec: specs/AutomationExercise.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("User Interface and Responsiveness", () => {
  test("Verify footer subscription section on all pages", async ({ page }) => {
    // Test footer on homepage
    await page.goto("https://automationexercise.com/");

    // Verify footer section elements are visible
    await expect(
      page.getByRole("heading", { name: "Subscription" }),
    ).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Your email address" }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "" }).first()).toBeVisible();
    await expect(
      page.getByText("Copyright © 2021 All rights reserved"),
    ).toBeVisible();

    // Test footer on products page using link navigation
    await page.getByRole("link", { name: " Products" }).click();
    await expect(
      page.getByRole("heading", { name: "Subscription" }),
    ).toBeVisible();
    await expect(
      page.getByText("Copyright © 2021 All rights reserved"),
    ).toBeVisible();

    // Test footer on cart page
    await page.getByRole("link", { name: " Cart" }).click();
    await expect(
      page.getByRole("heading", { name: "Subscription" }),
    ).toBeVisible();
    await expect(
      page.getByText("Copyright © 2021 All rights reserved"),
    ).toBeVisible();
  });

  test("Subscribe to newsletter", async ({ page }) => {
    // Navigate to homepage
    await page.goto("https://automationexercise.com/");

    // Verify subscription section is visible
    await expect(
      page.getByRole("heading", { name: "Subscription" }),
    ).toBeVisible();

    // Generate unique email for subscription
    const timestamp = Date.now();
    const subscriptionEmail = `subscriber${timestamp}@example.com`;

    // Fill subscription email field
    await page
      .getByRole("textbox", { name: "Your email address" })
      .fill(subscriptionEmail);

    // Verify email field contains the value
    await expect(
      page.getByRole("textbox", { name: "Your email address" }),
    ).toHaveValue(subscriptionEmail);

    // Click subscribe button (the button with no text in Subscription section)
    const subscribeButton = page
      .getByRole("heading", { name: "Subscription" })
      .locator("..")
      .getByRole("button");
    await subscribeButton.click();

    // Verify success message appears
    await expect(
      page.getByText(/success|subscribed|Thank you|already/i),
    ).toBeVisible();
  });

  test("Breadcrumb navigation and category information on product details", async ({
    page,
  }) => {
    // Navigate to homepage
    await page.goto("https://automationexercise.com/");

    // Navigate to product details by clicking View Product link
    // Get the first "View Product" link from featured items
    const viewProductLinks = page.getByRole("link", { name: /View Product/i });
    await viewProductLinks.first().click();

    // Wait for product details page to load
    await expect(page).toHaveURL(/product_details/);

    // Verify product details page loads
    // Check for product name and details
    const productName = page.locator("h2").first();
    await expect(productName).toBeVisible();

    // Verify category/breadcrumb information is displayed
    // Look for category or breadcrumb elements
    const categoryText = page.getByText(/Women|Men|Kids|Tops|T-Shirts/i);
    await expect(categoryText.first()).toBeVisible();
  });

  test("Links open in correct context", async ({ page, context }) => {
    // Navigate to homepage
    await page.goto("https://automationexercise.com/");

    // Test Video Tutorials link opens correctly
    const videoLink = page.getByRole("link", {
      name: " Video Tutorials",
    });
    const linkTarget = await videoLink.getAttribute("href");

    // Verify the href is YouTube channel
    expect(linkTarget).toContain("youtube");
    expect(linkTarget).toContain("AutomationExercise");

    // Navigate to contact page to test email link
    await page.goto("https://automationexercise.com/contact_us");

    // Verify feedback email link
    const emailLink = page.getByRole("link", {
      name: "feedback@automationexercise.com",
    });
    await expect(emailLink).toBeVisible();

    // Verify email link has correct mailto href
    const emailHref = await emailLink.getAttribute("href");
    expect(emailHref).toBe("mailto:feedback@automationexercise.com");
  });

  test("Verify page titles are descriptive", async ({ page }) => {
    // Test homepage title
    await page.goto("https://automationexercise.com/");
    let pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");

    // Test products page title
    await page.getByRole("link", { name: " Products" }).click();
    pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");
    expect(pageTitle).toMatch(/Product|product/);

    // Test cart page title
    await page.getByRole("link", { name: " Cart" }).click();
    pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");
    expect(pageTitle).toMatch(/Cart|cart|Checkout/);

    // Test login page title
    await page.getByRole("link", { name: " Signup / Login" }).click();
    pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");
    expect(pageTitle).toMatch(/Login|Signup|Authentication/i);

    // Test contact page title
    await page.getByRole("link", { name: " Contact us" }).click();
    pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");
    expect(pageTitle).toMatch(/Contact/);

    // Test product details page title
    await page.goto("https://automationexercise.com/");
    const viewProductLinks = page.getByRole("link", { name: /View Product/i });
    await viewProductLinks.first().click();
    await expect(page).toHaveURL(/product_details/);

    pageTitle = await page.title();
    expect(pageTitle).toContain("Automation Exercise");
    expect(pageTitle).toMatch(/Product|product/);
  });
});
