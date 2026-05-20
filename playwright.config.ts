import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://allure-playground.vercel.app';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['line'],
    [
      'allure-playwright',
      {
        detail: true,
        suiteTitle: false,
        environmentInfo: {
          framework: 'Playwright',
          target_url: BASE_URL,
          node_version: process.version,
        },
      },
    ],
  ],
  use: {
    baseURL: BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Webkit'] },
    },
  ],
});
