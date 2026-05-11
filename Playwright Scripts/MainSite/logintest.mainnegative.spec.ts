import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Email address *' }).click();
  await page.locator('[data-test="email"]').fill('abcd@gmail.com');
  await page.locator('[data-test="login-form"] div').filter({ hasText: 'Password *' }).click();
  await page.locator('[data-test="password"]').fill('pas12345');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="login-submit"]').click();
  await page.getByText('Invalid email or password').click();
});