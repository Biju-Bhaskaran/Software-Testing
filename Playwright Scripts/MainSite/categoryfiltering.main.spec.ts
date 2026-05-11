import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30E8"]').check();
  await page.goto('https://practicesoftwaretesting.com/');
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30E8"]').check();
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30E8"]').uncheck();
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30E9"]').check();
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30E9"]').uncheck();
  await page.getByText('Tool Belts').click();
  await page.getByText('Tool Belts').click();
  await page.getByText('Grinder').click();
  await page.locator('app-overview').click();
  await page.locator('[data-test="category-01KQZAK3YCCFE12Z816B0Q30EF"]').uncheck();
});