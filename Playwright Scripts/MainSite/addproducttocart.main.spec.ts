import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01KQZAK3Z879NJ509P3YV79R72"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01KQZAK3ZRVZK7SQZE8KHP7QY4"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="nav-cart"]').click();
});