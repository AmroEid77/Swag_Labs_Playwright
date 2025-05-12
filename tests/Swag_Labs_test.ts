import { test, Page, expect } from '@playwright/test';

async function login(page: Page, username: string, password: string) {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs")
  await page.locator('[data-test="username"]').fill(username);
  await page.waitForTimeout(1000);
  await page.locator('[data-test="password"]').fill(password);
  await page.waitForTimeout(1000);
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(1000);
  await expect(page.url()).toContain("inventory.html")
}

async function addItemsToCart(page: Page, items: string[]) {
  for (const item of items) {
    await page.locator(`[data-test="add-to-cart-${item}"]`).click();
    await page.waitForTimeout(1000);
  }
}

async function logout(page: Page) {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="logout-sidebar-link"]').click();
}

test('Login, add items, view item, and logout slowly (1s)', async ({ page }) => {
  await login(page, 'standard_user', 'secret_sauce');

  await addItemsToCart(page, [
    'sauce-labs-bike-light',
    'sauce-labs-backpack',
  ]);

  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.waitForTimeout(1000);
  await page.locator('[data-test="back-to-products"]').click();
  await page.waitForTimeout(1000);

  await logout(page);
});
