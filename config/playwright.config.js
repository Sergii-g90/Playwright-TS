const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Determine the environment, defaulting to 'development'
const testEnv = process.env.TEST_ENV || 'development';

// Load the appropriate .env file
dotenv.config({ path: path.resolve(__dirname, `environments/.env.${testEnv}`) });

const config = defineConfig({
  testDir: '../../tests', // Relative path from config/ to tests/
  use: {
    baseURL: process.env.BASE_URL,
    // Other Playwright options can be set here
  },
  reporter: [['html', { outputFolder: '../playwright-report', open: 'never' }]],
  // Other global configurations can go here
});

module.exports = config;
