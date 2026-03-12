// spec: specs/AutomationExercise.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Shopping Cart Functionality", () => {
  test("View empty cart", async ({ page }) => {
    // Navigate to cart page to verify empty cart message
    await page.goto("https://automationexercise.com/view_cart");

    // Verify cart page loads
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await expect(page).toHaveTitle("Automation Exercise - Checkout");

    // Verify Cart is empty message is displayed
    await expect(page.getByText("Cart is empty!")).toBeVisible();
    await expect(
      page.getByText(/Cart is empty! Click.*to buy products/),
    ).toBeVisible();

    // Verify shopping cart breadcrumb
    await expect(page.getByText("Shopping Cart")).toBeVisible();

    // Click here link to go to products page
    await page.getByRole("link", { name: "here" }).click();

    // Verify redirects to products page
    await expect(page).toHaveURL("https://automationexercise.com/products");
  });

  test("Add single product to cart", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Click View Product link to navigate to product details page
    await page.getByRole("link", { name: " View Product" }).first().click();

    // Verify product details page loads
    await expect(page).toHaveURL(
      "https://automationexercise.com/product_details/1",
    );

    // Verify default quantity is 1
    await expect(page.locator("#quantity")).toHaveValue("1");

    // Click Add to cart button to add product with default quantity to cart
    await page.getByRole("button", { name: " Add to cart" }).click();

    // Verify success message or confirmation is displayed
    await expect(page.getByText("Added!")).toBeVisible();
    await expect(
      page.getByText("Your product has been added to cart."),
    ).toBeVisible();

    // Click View Cart link to verify product was added
    await page.getByRole("link", { name: "View Cart" }).click();

    // Verify added product appears in cart
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await expect(page.getByRole("heading", { name: "Blue Top" })).toBeVisible();

    // Verify product quantity shows 1
    await expect(page.getByRole("button", { name: "1" }).first()).toBeVisible();

    // Verify product price is displayed
    await expect(page.getByText(/^Rs\. 500$/).first()).toBeVisible();
  });

  test("Add product to cart with custom quantity", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Click View Product link for second product (Men Tshirt) to test custom quantity
    await page.getByRole("link", { name: " View Product" }).nth(1).click();

    // Verify product details page loads
    await expect(page).toHaveURL(
      "https://automationexercise.com/product_details/2",
    );

    // Change quantity to 3
    await page.locator("#quantity").fill("3");

    // Verify quantity field shows 3
    await expect(page.locator("#quantity")).toHaveValue("3");

    // Click Add to cart button to add product with quantity 3
    await page.getByRole("button", { name: " Add to cart" }).click();

    // Verify success message is displayed
    await expect(page.getByText("Added!")).toBeVisible();

    // Click View Cart to verify product with quantity 3 was added
    await page.getByRole("link", { name: "View Cart" }).click();

    // Verify product appears in cart with quantity 3
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await expect(
      page.getByRole("heading", { name: "Men Tshirt" }),
    ).toBeVisible();

    // Find the Men Tshirt row in the cart table using the product heading
    const menTshirtHeading = page.getByRole("heading", { name: "Men Tshirt" });
    const menTshirtRow = menTshirtHeading.locator("..").locator("..");

    // Verify quantity in the Men Tshirt row
    await expect(menTshirtRow.getByRole("button", { name: "3" })).toBeVisible();

    // Verify total price is calculated correctly (price × 3: 400 × 3 = 1200)
    await expect(page.getByText(/^Rs\. 1200$/).first()).toBeVisible();
  });

  test("Add product to cart from products list", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify products page loads
    await expect(page).toHaveURL("https://automationexercise.com/products");

    // Click Add to cart button for third product from products list
    await page.getByText("Add to cart").nth(4).click();

    // Verify confirmation message appears
    await expect(page.getByText("Added!")).toBeVisible();
    await expect(
      page.getByText("Your product has been added to cart."),
    ).toBeVisible();

    // Click View Cart to verify product was added from products list
    await page.getByRole("link", { name: "View Cart" }).click();

    // Verify added product appears in cart with quantity 1
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await expect(
      page.getByRole("heading", { name: "Sleeveless Dress" }),
    ).toBeVisible();

    // Verify product quantity shows 1
    const dressHeading = page.getByRole("heading", {
      name: "Sleeveless Dress",
    });
    const dressRow = dressHeading.locator("..").locator("..");
    await expect(dressRow.getByRole("button", { name: "1" })).toBeVisible();

    // Verify product price is displayed
    await expect(page.getByText(/^Rs\. 1000$/).first()).toBeVisible();
  });

  test("Add multiple products to cart", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify products page loads
    await expect(page).toHaveURL("https://automationexercise.com/products");

    // Add Blue Top (first product) to cart with default quantity
    await page.getByRole("link", { name: " View Product" }).first().click();
    await page.getByRole("button", { name: " Add to cart" }).click();

    // Verify product added successfully to cart
    await expect(
      page.getByText("Your product has been added to cart."),
    ).toBeVisible();

    // Continue shopping to add another product
    await page.getByRole("button", { name: "Continue Shopping" }).click();

    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Add second product (Men Tshirt) with quantity 2
    await page.getByRole("link", { name: " View Product" }).nth(1).click();
    await page.locator("#quantity").fill("2");

    // Verify quantity field shows 2
    await expect(page.locator("#quantity")).toHaveValue("2");

    await page.getByRole("button", { name: " Add to cart" }).click();

    // Verify product added successfully to cart
    await expect(
      page.getByText("Your product has been added to cart."),
    ).toBeVisible();

    // View cart to verify both products
    await page.getByRole("link", { name: "View Cart" }).click();

    // Verify both products appear in cart
    await expect(page).toHaveURL("https://automationexercise.com/view_cart");
    await expect(page.getByRole("heading", { name: "Blue Top" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Men Tshirt" }),
    ).toBeVisible();

    // Verify first product has quantity 1
    const blueTopHeading = page.getByRole("heading", { name: "Blue Top" });
    const blueTopRow = blueTopHeading.locator("..").locator("..");
    await expect(blueTopRow.getByRole("button", { name: "1" })).toBeVisible();

    // Verify second product has quantity 2
    const menTshirtHeading = page.getByRole("heading", { name: "Men Tshirt" });
    const menTshirtRow = menTshirtHeading.locator("..").locator("..");
    await expect(menTshirtRow.getByRole("button", { name: "2" })).toBeVisible();

    // Verify prices are displayed correctly
    await expect(page.getByText(/^Rs\. 500$/).first()).toBeVisible();
    await expect(page.getByText(/^Rs\. 400$/).first()).toBeVisible();

    // Verify totals are calculated correctly
    // Blue Top: 1 × 500 = 500
    // Men Tshirt: 2 × 400 = 800
    const allPrices = page.getByText(/^Rs\. 500$/);
    const priceCount = await allPrices.count();
    expect(priceCount).toBeGreaterThan(0);

    const allTotals800 = page.getByText(/^Rs\. 800$/);
    await expect(allTotals800.first()).toBeVisible();
  });
});
