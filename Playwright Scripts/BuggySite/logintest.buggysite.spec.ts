import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://with-bugs.practicesoftwaretesting.com/#/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Password *' }).click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-menu"]').click();
  await page.locator('[data-test="nav-my-messages"]').press('ArrowDown');
  await page.locator('[data-test="nav-sign-out"]').click();
});