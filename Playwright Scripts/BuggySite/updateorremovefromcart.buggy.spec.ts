import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).dblclick();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01KQZE0YFTHHC8V3Y8TK1JNYZV"]').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('[data-test="add-to-cart"]').click();
  await page.getByText('Pliers PliersForgeFlex Tools').click();
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowUp');
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="product-quantity"]').click();
  await page.locator('[data-test="product-quantity"]').fill('5');
  await page.getByText('ItemQuantityPriceTotalPliers Quantity for Pliers$12.01$60.05Total$12.01Continue').click();
  await page.locator('.btn.btn-danger').click();
});