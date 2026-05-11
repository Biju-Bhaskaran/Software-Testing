import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01KQZ3QCDVZ3HHM8Z4CXN69RN9"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="product-01KQZ3QCETH05ZQAZYFR2J1BFY"]').click();
});