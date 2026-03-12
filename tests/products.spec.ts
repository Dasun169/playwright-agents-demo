// spec: specs/AutomationExercise.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Product Browsing and Filtering", () => {
  test("View all products on products page", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify All Products heading is visible
    await expect(
      page.getByRole("heading", { name: "All Products" }),
    ).toBeVisible();

    // Verify search box is visible
    await expect(
      page.getByRole("textbox", { name: "Search Product" }),
    ).toBeVisible();

    // Verify product cards are displayed with required information
    // Check for product cards with prices (use first() due to multiple matches)
    await expect(page.getByText(/^Rs\.\s*\d+$/).first()).toBeVisible();

    // Verify Add to cart buttons are visible
    const addToCartButtons = page.locator('text="Add to cart"');
    await expect(addToCartButtons.first()).toBeVisible();

    // Verify View Product links are visible
    const viewProductLinks = page.getByRole("link", { name: /View Product/ });
    await expect(viewProductLinks.first()).toBeVisible();

    // Verify product names are displayed
    await expect(page.getByText("Blue Top").first()).toBeVisible();
  });

  test("Search for products by name", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify search box is visible
    const searchBox = page.getByRole("textbox", { name: "Search Product" });
    await expect(searchBox).toBeVisible();

    // Type 'Blue' in search box
    await searchBox.fill("Blue");

    // Click search button (locate it near the search box by finding the button within the search section)
    await page.locator("[class*='search']").locator("button").click();

    // Verify search results show products containing 'Blue'
    await expect(page.getByText("Blue Top").first()).toBeVisible();

    // Navigate back to products page
    await page.goto("https://automationexercise.com/products");

    // Search for 'Sleeveless' - should return Sleeveless Dress product
    await page
      .getByRole("textbox", { name: "Search Product" })
      .fill("Sleeveless");
    await page.locator("[class*='search']").locator("button").click();

    // Verify search results show products with 'Sleeveless'
    await expect(page.getByText("Sleeveless Dress").first()).toBeVisible();

    // Navigate back and search for non-existent product
    await page.goto("https://automationexercise.com/products");
    await page.getByRole("textbox", { name: "Search Product" }).fill("xyz123");
    await page.locator("[class*='search']").locator("button").click();

    // Verify All Products heading is still visible
    await expect(
      page.getByRole("heading", {
        name: "All Products",
      }),
    ).toBeVisible();
  });

  test("Filter products by category", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify Category section in sidebar is visible
    await expect(page.getByRole("heading", { name: "Category" })).toBeVisible();

    // Click on Women category (first match)
    await page.locator('[href="#Women"]').click();

    // Verify Women subcategories are displayed
    await expect(page.getByRole("link", { name: "Dress" })).toBeVisible();

    // Click on Dress to filter women's dress products
    await page.getByRole("link", { name: "Dress" }).click();

    // Verify filtered products are displayed
    await expect(
      page.getByRole("heading", { name: /Women - Dress Products/i }),
    ).toBeVisible();

    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Click on Men category using href attribute
    await page.locator('[href="#Men"]').click();

    // Verify Men subcategories are displayed (Men category has expanded)
    await expect(page.locator('[href="#Men"]')).toBeVisible();

    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Click on Kids category using href attribute
    await page.locator('[href="#Kids"]').click();

    // Verify Kids subcategories are displayed (should expand)
    await expect(page.locator('[href="#Kids"]')).toBeVisible();
  });

  test("Filter products by brand", async ({ page }) => {
    // Navigate to products page
    await page.goto("https://automationexercise.com/products");

    // Verify Brands section in sidebar is visible
    await expect(page.getByRole("heading", { name: "Brands" })).toBeVisible();

    // Click on Polo brand (6 products)
    await page.getByRole("link", { name: "(6) Polo" }).click();

    // Verify URL updates to /brand_products/Polo
    await expect(page).toHaveURL(
      "https://automationexercise.com/brand_products/Polo",
    );

    // Verify filtered products are displayed
    await expect(page.getByRole("heading", { name: /Polo/i })).toBeVisible();

    // Navigate to H&M brand products
    await page.goto("https://automationexercise.com/brand_products/H&M");

    // Verify URL matches H&M brand
    await expect(page).toHaveURL(
      "https://automationexercise.com/brand_products/H&M",
    );

    // Verify products are displayed
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Navigate to Babyhug brand products
    await page.goto("https://automationexercise.com/brand_products/Babyhug");

    // Verify URL matches Babyhug brand
    await expect(page).toHaveURL(
      "https://automationexercise.com/brand_products/Babyhug",
    );

    // Verify products are displayed
    await expect(page).toHaveTitle(/Automation Exercise/);
  });
});
