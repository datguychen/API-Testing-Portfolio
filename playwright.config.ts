import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  timeout: 80 * 1000,
  snapshotPathTemplate:'../Utils/Screenshots/{platform}/{projectName}/{testFilePath}/{arg}{ext}',
  expect: {
    timeout: 20 * 1000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 5,
  reporter: [
    ['dot'],
    ['html'],
    ['line'],
  ],
  projects: [
    {
      name: 'Tests_Chrome_With_Media',
      use: {
        launchOptions: { slowMo: 500 },
        actionTimeout: 0,
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Chrome'],
        viewport: { width: 1750, height: 900 },
        channel: 'chrome',
      },
    },
    {
      name: 'Tests_Safari',
      use: {
        launchOptions: { slowMo: 500 },
        actionTimeout: 0,
        browserName: 'webkit',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        ...devices['Desktop Safari'],
        viewport: { width: 1750, height: 900 },
      },
    },
  ],
});
