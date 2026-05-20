import { test, expect } from '@playwright/test';

test.describe('Next.js Boilerplate Landing Page Tests', () => {

  test('page loads and has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Create Next App/);
  });

  test('Next.js logo is visible', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('img[alt="Next.js logo"]');
    await expect(logo).toBeVisible();
  });

  test('getting started instruction is present', async ({ page }) => {
    await page.goto('/');
    const instruction = page.locator('text=Get started by editing');
    await expect(instruction).toBeVisible();
  });

  test('action buttons (Deploy and Docs) are present', async ({ page }) => {
    await page.goto('/');
    const deployLink = page.locator('a:has-text("Deploy now")');
    const docsLink = page.locator('a:has-text("Read our docs")');
    await expect(deployLink).toBeVisible();
    await expect(docsLink).toBeVisible();
  });

  test('footer navigation links are functional and present', async ({ page }) => {
    await page.goto('/');
    const learnLink = page.locator('a:has-text("Learn")');
    const examplesLink = page.locator('a:has-text("Examples")');
    const goToNextjsLink = page.locator('a:has-text("Go to nextjs.org")');
    await expect(learnLink).toBeVisible();
    await expect(examplesLink).toBeVisible();
    await expect(goToNextjsLink).toBeVisible();
  });

});
