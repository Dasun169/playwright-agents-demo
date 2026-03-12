// spec: specs/AutomationExercise.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Navigation and Page Structure", () => {
  test("Homepage loads successfully with all main elements visible", async ({
    page,
  }) => {
    // Navigate to homepage to verify all main elements are visible
    await page.goto("https://automationexercise.com/");

    // Verify AutomationExercise heading is visible
    await expect(
      page.getByRole("heading", { name: "AutomationExercise" })
    ).toBeVisible();

    // Verify Featured Items section is displayed
    await expect(
      page.getByRole("heading", { name: "Features Items" })
    ).toBeVisible();

    // Verify Home navigation link is visible
    await expect(page.getByRole("link", { name: "Home" })).toBeVisible();

    // Verify Products link is visible in navigation
    await expect(page.getByText("Products")).toBeVisible();

    // Verify Categories sidebar with Women, Men, Kids options
    await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();

    // Verify Brands section is visible
    await expect(page.getByRole("heading", { name: "Brands" })).toBeVisible();
  });

  test("Navigation menu links work correctly", async ({ page }) => {
    // Navigate to homepage
    await page.goto("https://automationexercise.com/");

    // Test Home link navigation
    await page.getByRole("link", { name: " Home" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/");

    // Test Products link navigation
    await page.getByRole("link", { name: " Products" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/products");
    await expect(
      page.getByRole("heading", { name: "All Products" })
    ).toBeVisible();

    // Test Cart link navigation
    await page.getByRole("link", { name: " Cart" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");

    // Test Signup/Login link navigation
    await page.getByRole("link", { name: " Signup / Login" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/login");
    await expect(
      page.getByRole("heading", { name: "Login to your account" })
    ).toBeVisible();

    // Test Contact us link navigation
    await page.getByRole("link", { name: " Contact us" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/contact_us");
    await expect(
      page.getByRole("heading", { name: /Contact Us/i })
    ).toBeVisible();

    // Test Test Cases link navigation
    await page.getByRole("link", { name: " Test Cases" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/test_cases");

    // Test API Testing link navigation
    await page.getByRole("link", { name: " API Testing" }).click();
    await expect(page).toHaveURL("https://automationexercise.com/api_list");
    await expect(
      page.getByRole("heading", { name: /APIs List for practice/i })
    ).toBeVisible();
  });

  test("Logo click navigates to homepage", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");
    await expect(page).toHaveURL("https://automationexercise.com/products");

    // Click on the website logo
    await page.getByRole("link", { name: "Website for automation practice" }).click();

    // Verify redirect to homepage
    await expect(page).toHaveURL("https://automationexercise.com/");
    await expect(
      page.getByRole("heading", { name: "AutomationExercise" })
    ).toBeVisible();
  });
});
