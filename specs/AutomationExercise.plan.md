# AutomationExercise Comprehensive Test Plan

## Application Overview

AutomationExercise (https://automationexercise.com/) is a full-fledged e-commerce practice website designed for QA engineers to practice automation testing. The application provides a complete shopping experience including product browsing, filtering, user authentication, shopping cart, product reviews, and contact forms. This test plan covers functional testing scenarios across all major features and user workflows.

## Test Scenarios

### 1. Navigation and Page Structure

**Seed:** `tests/seed.spec.ts`

#### 1.1. Navigation and Page Structure Tests

**File:** `tests/navigation.spec.ts`

**Steps:**
  1. Test 1.1: Homepage loads successfully - Navigate to https://automationexercise.com/ and verify all main elements are visible
    - expect: Homepage loads successfully
    - expect: AutomationExercise heading is visible
    - expect: Featured Items section is displayed
    - expect: Navigation menu is visible with Home, Products, Cart, Signup/Login, Test Cases, API Testing, Video Tutorials, and Contact us links
    - expect: Logo is visible and clickable
    - expect: Featured Items heading is visible
    - expect: Product cards with prices and Add to cart buttons are displayed
    - expect: View Product links are visible for each product
    - expect: Category heading is visible
    - expect: Women, Men, and Kids category links are displayed
    - expect: Brands heading is visible
    - expect: Brand list includes Polo, H&M, Madame, Mast & Harbour, Babyhug, Allen Solly Junior, Kookie Kids, and Biba
  2. Test 1.2.1: Home link navigation - Click on Home link and verify redirection
    - expect: Redirects to homepage
    - expect: URL is https://automationexercise.com/
  3. Test 1.2.2: Products link navigation - Click on Products link and verify redirection
    - expect: Redirects to products page
    - expect: URL is https://automationexercise.com/products
    - expect: All Products section is visible
  4. Test 1.2.3: Cart link navigation - Click on Cart link and verify redirection
    - expect: Redirects to cart page
    - expect: URL is https://automationexercise.com/view_cart
  5. Test 1.2.4: Signup/Login link navigation - Click on Signup/Login link and verify redirection
    - expect: Redirects to login page
    - expect: URL is https://automationexercise.com/login
    - expect: Login and Signup forms are visible
  6. Test 1.2.5: Contact us link navigation - Click on Contact us link and verify redirection
    - expect: Redirects to contact page
    - expect: URL is https://automationexercise.com/contact_us
    - expect: Get In Touch form is visible
  7. Test 1.2.6: Test Cases link navigation - Click on Test Cases link and verify redirection
    - expect: Redirects to test cases page
    - expect: URL is https://automationexercise.com/test_cases
  8. Test 1.2.7: API Testing link navigation - Click on API Testing link and verify redirection
    - expect: Redirects to API testing page
    - expect: URL is https://automationexercise.com/api_list
  9. Test 1.3: Logo click navigation - Navigate to products page, click on website logo, and verify redirection to homepage
    - expect: Redirects to homepage
    - expect: URL changes to https://automationexercise.com/

#### 1.2. Test 2: Navigation Menu Links Work Correctly

**File:** `tests/navigation.spec.ts`

**Steps:**

### 2. Product Browsing and Filtering

**Seed:** `tests/seed.spec.ts`

#### 2.1. Product Browsing and Filtering Tests

**File:** `tests/products.spec.ts`

**Steps:**
  1. Test 2.1: View all products - Navigate to https://automationexercise.com/products and verify all products are displayed with required information
    - expect: Products page loads
    - expect: All Products heading is visible
    - expect: Product grid displays multiple products
    - expect: Each product card shows product image
    - expect: Product price is displayed (e.g., Rs. 500)
    - expect: Product name is displayed (e.g., Blue Top)
    - expect: Add to cart button is visible
    - expect: View Product button is visible
    - expect: All products load without errors
    - expect: At least 8+ products are visible
    - expect: Page is responsive and all elements are properly aligned
  2. Test 2.2: Search for products - Test search functionality by searching for 'Blue', 'Dress', and 'xyz123'
    - expect: Products page loads
    - expect: Search box with placeholder 'Search Product' is visible
    - expect: Search box contains 'Blue'
    - expect: Search results are displayed
    - expect: Products containing 'Blue' in the name are shown (e.g., Blue Top)
    - expect: Search results update
    - expect: Products with 'Dress' in name are displayed
    - expect: No results are displayed or a 'No products found' message appears
  3. Test 2.3: Filter products by category - Navigate to products and filter by Women, Men, and Kids categories
    - expect: Products page loads
    - expect: Category section in sidebar is visible with Women, Men, Kids options
    - expect: Filtered products are displayed when clicking Women category
    - expect: Products are mainly women's clothing items
    - expect: Filtered products are displayed when clicking Men category
    - expect: Products are mainly men's clothing items
    - expect: Filtered products are displayed when clicking Kids category
    - expect: Products are mainly kids' clothing items
  4. Test 2.4: Filter products by brand - Filter products by Polo, H&M, and Babyhug brands
    - expect: Products page loads
    - expect: Brands section in sidebar is visible with list of brands
    - expect: Filtered products are displayed
    - expect: All displayed products are from Polo brand
    - expect: URL updates to /brand_products/Polo
    - expect: All displayed products are from H&M brand
    - expect: All displayed products are from Babyhug brand

### 3. Product Details and Reviews

**Seed:** `tests/seed.spec.ts`

#### 3.1. Product Details and Reviews Tests

**File:** `tests/product_details.spec.ts`

**Steps:**
  1. Test 3.1: View product details page - Navigate to products, click View Product link, and verify all product information is displayed
    - expect: Products page loads
    - expect: Product details page loads
    - expect: URL is https://automationexercise.com/product_details/1
    - expect: Product image is displayed
    - expect: Product name (Blue Top) is visible
    - expect: Product price (Rs. 500) is shown
    - expect: Category information is displayed
    - expect: Star rating/review section is visible
    - expect: Availability status is shown (In Stock)
    - expect: Condition is shown (New)
    - expect: Brand is displayed (Polo)
    - expect: Quantity selector shows default value of 1
    - expect: Quantity can be modified
    - expect: Add to cart button is visible
    - expect: Button is responsive
    - expect: Write Your Review link scrolls to review form
    - expect: Review form is visible with Name, Email, and Review text fields
  2. Test 3.2: Write product review - Navigate to product details, fill review form with John Doe, john@example.com, and review text, then submit
    - expect: Product details page loads
    - expect: Review form is visible with Your Name, Email Address, and Add Review Here textboxes
    - expect: Submit button is visible
    - expect: Name field contains 'John Doe'
    - expect: Email field contains 'john@example.com'
    - expect: Review field contains the text
    - expect: Review is submitted successfully
    - expect: Success message is displayed or form is cleared
  3. Test 3.3: View product from homepage featured items - Navigate to homepage and click View Product link for a featured item
    - expect: Homepage loads
    - expect: Featured Items section is visible
    - expect: Product details page loads
    - expect: Correct product details are displayed

### 4. Shopping Cart Functionality

**Seed:** `tests/seed.spec.ts`

#### 4.1. Shopping Cart Functionality Tests

**File:** `tests/cart.spec.ts`

**Steps:**
  1. Test 4.1: View empty cart - Navigate to cart page and verify empty cart message with link to products
    - expect: Cart page loads
    - expect: Cart is empty message is displayed
    - expect: Message says: 'Cart is empty! Click here to buy products.'
    - expect: Redirects to products page
    - expect: URL is https://automationexercise.com/products
  2. Test 4.2: Add single product to cart - Navigate to product details, add product to cart, and verify in cart
    - expect: Product details page loads
    - expect: Default quantity is 1
    - expect: Product is added to cart
    - expect: Success message or confirmation is displayed
    - expect: Added product appears in cart
    - expect: Product quantity shows 1
    - expect: Product price is displayed
  3. Test 4.3: Add product to cart with custom quantity - Navigate to product details, change quantity to 3, add to cart, and verify
    - expect: Product details page loads
    - expect: Quantity field shows 3
    - expect: Product is added to cart with quantity 3
    - expect: Product appears in cart with quantity 3
    - expect: Total price is calculated correctly (price × 3)
  4. Test 4.4: Add product to cart from products list - Navigate to products page and add product from list to cart
    - expect: Products page loads
    - expect: Product is added to cart
    - expect: Confirmation message appears
    - expect: Added product appears in cart with quantity 1
  5. Test 4.5: Add multiple products to cart - Add Blue Top, then add second product with quantity 2, then verify both in cart
    - expect: Products page loads
    - expect: Product added successfully to cart
    - expect: Second product added with quantity 2
    - expect: Both products appear in cart
    - expect: First product has quantity 1
    - expect: Second product has quantity 2
    - expect: Subtotal and total are calculated correctly

### 5. User Authentication

**Seed:** `tests/seed.spec.ts`

#### 5.1. User Authentication Tests

**File:** `tests/auth.spec.ts`

**Steps:**
  1. Test 5.1: Access login/signup page - Navigate to login page and verify all form elements are visible
    - expect: Login page loads
    - expect: URL is https://automationexercise.com/login
    - expect: Login to your account heading is visible
    - expect: Email Address field is present
    - expect: Password field is present
    - expect: Login button is present
    - expect: New User Signup! heading is visible
    - expect: Name field is present
    - expect: Email Address field is present
    - expect: Signup button is present
    - expect: OR heading separates the two forms
  2. Test 5.2: Login with valid credentials - Navigate to login page, enter valid email and password, and verify login
    - expect: Login page loads
    - expect: Email field contains the entered value
    - expect: Password field contains the entered value (masked)
    - expect: User is logged in successfully
    - expect: Redirected to appropriate page
    - expect: Success message may be displayed
  3. Test 5.3: Login with invalid email - Enter nonexistent@example.com and password, verify error message
    - expect: Login page loads
    - expect: Email field is filled
    - expect: Password field is filled
    - expect: Error message is displayed
    - expect: User is not logged in
    - expect: Remains on login page
  4. Test 5.4: Login with invalid password - Enter valid email with incorrect password, verify error message
    - expect: Login page loads
    - expect: Email field is filled
    - expect: Password field is filled
    - expect: Error message is displayed
    - expect: User is not logged in
  5. Test 5.5: Signup with new user details - Enter Jane Smith and jane.smith@example.com in signup form and submit
    - expect: Login page loads
    - expect: Name field contains 'Jane Smith'
    - expect: Email field contains 'jane.smith@example.com'
    - expect: User registration is initiated
    - expect: May be redirected to account creation page
    - expect: Success message or confirmation is shown
  6. Test 5.6: Signup with empty fields - Leave Name and Email fields empty in signup form and verify validation
    - expect: Login page loads
    - expect: Form validation error or message appears
    - expect: User is not signed up
  7. Test 5.7: Signup with invalid email format - Enter John and invalid-email in signup form and verify validation
    - expect: Login page loads
    - expect: Name field is filled
    - expect: Email field contains invalid format
    - expect: Form validation error appears
    - expect: Email format error message is shown
    - expect: Signup is not completed

### 6. Contact Form

**Seed:** `tests/seed.spec.ts`

#### 6.1. Contact Form Tests

**File:** `tests/contact.spec.ts`

**Steps:**
  1. Test 6.1: Access contact us page - Click Contact us link and verify page loads with all required elements
    - expect: Contact page loads
    - expect: URL is https://automationexercise.com/contact_us
    - expect: Contact Us heading is visible
    - expect: Get In Touch heading is visible
    - expect: Note about testing purpose is displayed
  2. Test 6.2: View contact form fields - Navigate to contact page and verify all form fields are visible
    - expect: Contact page loads
    - expect: Name textbox is present
    - expect: Email textbox is present
    - expect: Subject textbox is present
    - expect: Your Message Here textarea is present
    - expect: Choose File button is present
    - expect: Submit button is present
  3. Test 6.3: Submit contact form with valid data - Fill contact form with complete data and submit
    - expect: Contact page loads
    - expect: Name field contains 'John Doe'
    - expect: Email field contains 'john@example.com'
    - expect: Subject field contains 'Test Subject Line'
    - expect: Message field contains the text
    - expect: Form is submitted
    - expect: Success message is displayed or page refreshes
    - expect: Form fields may be cleared
  4. Test 6.4: Submit contact form with empty required fields - Leave various fields empty and verify validation errors
    - expect: Contact page loads
    - expect: Form validation errors appear
    - expect: Form is not submitted
    - expect: Validation error for Email field appears
    - expect: Validation error for Subject field appears
  5. Test 6.5: Submit contact form with file upload - Fill form, upload file, and submit
    - expect: Contact page loads
    - expect: All fields are filled with valid data
    - expect: File picker dialog appears
    - expect: File is selected
    - expect: File name is displayed
    - expect: Form with file is submitted successfully
    - expect: Success message is displayed
  6. Test 6.6: View feedback section on contact page - Scroll down and verify Feedback For Us section
    - expect: Contact page loads
    - expect: Feedback For Us heading is visible
    - expect: Feedback information is displayed
    - expect: Email link 'feedback@automationexercise.com' is visible and clickable

### 7. User Interface and Responsiveness

**Seed:** `tests/seed.spec.ts`

#### 7.1. User Interface and Responsiveness Tests

**File:** `tests/ui.spec.ts`

**Steps:**
  1. Test 7.1: Verify footer subscription section on all pages - Navigate to homepage, products, and cart pages and verify footer on each
    - expect: Homepage loads
    - expect: Footer section is visible
    - expect: Subscription heading is displayed
    - expect: Email textbox is present
    - expect: Subscribe button is present
    - expect: Copyright notice is displayed
    - expect: Products page loads
    - expect: Same footer with subscription section is visible
    - expect: Cart page loads
    - expect: Footer section with subscription is visible
  2. Test 7.2: Subscribe to newsletter - Navigate to homepage, enter email in subscription field, and subscribe
    - expect: Homepage loads
    - expect: Subscription section is visible
    - expect: Subscription email field contains the email
    - expect: Subscription is processed
    - expect: Success message may be displayed
  3. Test 7.3: Breadcrumb navigation on product details - Navigate to product details and verify category path is displayed
    - expect: Product details page loads
    - expect: Category information showing product classification is visible (e.g., 'Women > Tops')
  4. Test 7.4: Links open in correct context - Click Video Tutorials link on homepage and email link on contact page
    - expect: YouTube channel opens (may open in new tab)
    - expect: URL is YouTube AutomationExercise channel
    - expect: Email client opens with the email address pre-filled
  5. Test 7.5: Verify page titles are descriptive - Navigate through pages (homepage, products, product details, cart, login, contact) and verify page titles
    - expect: Page title contains 'Automation Exercise'
    - expect: Page title is descriptive (e.g., 'Automation Exercise - Products')
    - expect: Page title is descriptive (e.g., 'Automation Exercise - Product Details')
    - expect: Page title is descriptive (e.g., 'Automation Exercise - Checkout')
    - expect: Page title is descriptive (e.g., 'Automation Exercise - Signup / Login')
    - expect: Page title is descriptive (e.g., 'Automation Exercise - Contact')

### 8. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 8.1. Edge Cases and Error Handling Tests

**File:** `tests/edge_cases.spec.ts`

**Steps:**
  1. Test 8.1: Direct navigation to non-existent product - Navigate to https://automationexercise.com/product_details/99999
    - expect: Page either shows product not found error
    - expect: Or redirects to products page
    - expect: No server error (500) occurs
  2. Test 8.2: Rapid clicks on add to cart button - Navigate to product details page and rapidly click the 'Add to cart' button multiple times
    - expect: Product page loads
    - expect: Product is added appropriately (either prevents duplicate or queues correctly)
    - expect: No JavaScript errors occur
  3. Test 8.3: Search with special characters - Navigate to products, search for '@#$%' and '<script>' and verify safe handling
    - expect: Products page loads
    - expect: Search completes without errors
    - expect: No results or results appropriately filtered
    - expect: Search is cleansed to prevent injection
    - expect: No errors or script execution occurs
  4. Test 8.4: Form submission with very long text - Navigate to contact page, fill fields with 1000+ characters, and submit
    - expect: Contact page loads
    - expect: Text fields accept the input
    - expect: Form handles long input gracefully
    - expect: Form is submitted successfully or appropriate validation message appears
  5. Test 8.5: Navigation with browser back button - Navigate through pages (Home → Products → Product Details → Cart) then use back button
    - expect: Each page loads
    - expect: User is taken to Product Details page after first back
    - expect: User is taken to Products page after second back
    - expect: User is taken to Home page after third back
  6. Test 8.6: Modify quantity to zero - Navigate to product details, attempt to set quantity to 0 or negative number
    - expect: Product page loads
    - expect: System prevents invalid quantity
    - expect: Default or minimum valid quantity is maintained
    - expect: Product is not added or error message appears
  7. Test 8.7: Contact form submission with SQL injection attempt - Navigate to contact page, enter SQL injection attempt in Name field, and submit
    - expect: Contact page loads
    - expect: Input is treated as plain text
    - expect: No database operation occurs
    - expect: Form is submitted safely
    - expect: No data loss or unauthorized access
