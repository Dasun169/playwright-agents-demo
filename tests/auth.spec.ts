// spec: specs/AutomationExercise.plan.md
// seed: tests/seed.spec.ts

import { test, expect, Page } from "@playwright/test";

// Helper function to generate unique email with timestamp
function generateUniqueEmail(): string {
  const timestamp = Date.now();
  return `testuser${timestamp}@example.com`;
}

test.describe("User Authentication", () => {
  test("Access login/signup page", async ({ page }) => {
    // Navigate to login page and verify all form elements are visible
    await page.goto("https://automationexercise.com/login");

    // Verify the page URL
    await expect(page).toHaveURL("https://automationexercise.com/login");

    // Verify Login to your account section
    await expect(
      page.getByRole("heading", { name: "Login to your account" }),
    ).toBeVisible();

    // Verify login form fields
    await expect(
      page.getByRole("textbox", { name: "Email Address" }).first(),
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: "Password" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

    // Verify New User Signup section
    await expect(
      page.getByRole("heading", { name: "New User Signup!" }),
    ).toBeVisible();

    // Verify signup form fields
    await expect(page.getByRole("textbox", { name: "Name" })).toBeVisible();
    await expect(
      page.getByRole("textbox", { name: "Email Address" }).last(),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Signup" })).toBeVisible();

    // Verify OR heading separates the two forms
    await expect(page.getByRole("heading", { name: "OR" })).toBeVisible();
  });

  test("Login with invalid email", async ({ page }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Enter invalid email and password
    await page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address")
      .fill("nonexistent@example.com");

    await page.getByRole("textbox", { name: "Password" }).fill("password123");

    // Click login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message is displayed
    await expect(
      page.getByText("Your email or password is incorrect!"),
    ).toBeVisible();

    // Verify we remain on login page
    await expect(page).toHaveURL("https://automationexercise.com/login");
  });

  test("Login with invalid password", async ({ page }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Enter valid email but incorrect password
    await page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address")
      .fill("testuser@example.com");

    await page.getByRole("textbox", { name: "Password" }).fill("wrongpassword");

    // Click login button
    await page.getByRole("button", { name: "Login" }).click();

    // Verify error message is displayed
    await expect(
      page.getByText("Your email or password is incorrect!"),
    ).toBeVisible();

    // Verify we remain on login page
    await expect(page).toHaveURL("https://automationexercise.com/login");
  });

  test("Signup with valid credentials initiates registration", async ({
    page,
  }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Generate unique email for new user
    const unique_email = generateUniqueEmail();
    const name = "Test User";

    // Fill signup form
    const signupForm = page.locator("form").filter({ hasText: "Signup" });
    await signupForm.getByPlaceholder("Name").fill(name);
    await signupForm.getByPlaceholder("Email Address").fill(unique_email);

    // Verify form is filled correctly
    await expect(signupForm.getByPlaceholder("Name")).toHaveValue(name);
    await expect(signupForm.getByPlaceholder("Email Address")).toHaveValue(
      unique_email,
    );

    // Click signup button
    await page.getByRole("button", { name: "Signup" }).click();

    // Verify we navigate to account creation page or receive confirmation
    // The website redirects to enter account details page
    const currentUrl = page.url();
    expect(currentUrl).not.toBe("https://automationexercise.com/login");
  });

  test("Signup with empty fields shows validation", async ({ page }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Get signup form
    const signupForm = page.locator("form").filter({ hasText: "Signup" });

    // Try to click signup without filling fields
    await page.getByRole("button", { name: "Signup" }).click();

    // Verify Name field is still visible (form not submitted due to HTML5 validation)
    const nameField = signupForm.getByPlaceholder("Name");
    await expect(nameField).toBeVisible();

    // Verify we remain on login page
    await expect(page).toHaveURL("https://automationexercise.com/login");
  });

  test("Signup with invalid email format shows validation", async ({
    page,
  }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Fill signup form with valid name but invalid email format
    const signupForm = page.locator("form").filter({ hasText: "Signup" });
    await signupForm.getByPlaceholder("Name").fill("John Doe");
    await signupForm
      .getByPlaceholder("Email Address")
      .fill("invalid-email-without-at");

    // Try to submit signup form
    await page.getByRole("button", { name: "Signup" }).click();

    // Verify form was not submitted (due to HTML5 email validation)
    // The form remains visible and no navigation occurs
    await expect(page).toHaveURL("https://automationexercise.com/login");

    // Verify the name field still has our input
    await expect(signupForm.getByPlaceholder("Name")).toHaveValue("John Doe");
  });

  test("Verify password field is masked during input", async ({ page }) => {
    // Navigate to login page
    await page.goto("https://automationexercise.com/login");

    // Fill password field
    const passwordField = page.getByRole("textbox", { name: "Password" });
    await passwordField.fill("TestPassword123");

    // Verify password field has type="password" (masked)
    const passwordType = await passwordField.evaluate(
      (el: HTMLInputElement) => el.type,
    );
    expect(passwordType).toBe("password");
  });
});
