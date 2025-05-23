import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Determine environment and load .env file
const env = process.env.TEST_ENV || 'development';
dotenv.config({ path: path.resolve(__dirname, `environments/.env.${env}`) });

const config: PlaywrightTestConfig = {
  testDir: '../../tests', // Relative to this config file's location
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: [['html', { outputFolder: '../playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    // Example device:
    // ...devices['Desktop Chrome'],
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  // Global setup and teardown can be added here if needed
};
export default config;
