# Playwright Test for SauceDemo

This folder contains an automated UI test using [Playwright](https://playwright.dev/) to simulate a complete user journey on [saucedemo.com](https://www.saucedemo.com/). The test includes login, adding products to the cart, viewing cart details, 
and logging out — all with deliberate 1-second delays to observe the behavior.

---

## 📄 Test Flow Summary

### 1. **Login**
- Navigates to the homepage.
- Verifies the page title is "Swag Labs".
- Fills in the provided username and password.
- Clicks the login button.
- Asserts successful login by checking that the URL contains `inventory.html`.

### 2. **Add Items to Cart**
- Adds specific products (`bike-light` and `backpack`) to the shopping cart.
- Uses 1-second pauses (`waitForTimeout(1000)`) after each action for visual clarity.

### 3. **View Item**
- Opens the shopping cart.
- Clicks on the first item link.
- Returns to the products page.

### 4. **Logout**
- Opens the side menu.
- Clicks the logout link.

---

## 📁 File Structure

tests/

├── Swag_labs_test.ts # Main test file containing login, add to cart, and logout flow
