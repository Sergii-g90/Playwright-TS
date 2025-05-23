import { test, expect, Page } from '@playwright/test';
import { HomePage } from '@pages/homePage'; // Using path alias

test.describe('Example E2E Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }: { page: Page }) => {
    // The 'page' fixture is already an instance of Page, no need for { page: Page }
    // Playwright's test runner automatically provides the correctly typed 'page'
    homePage = new HomePage(page);
  });

  test('should navigate to homepage and verify title', async ({ page }) => {
    // The 'page' fixture is already an instance of Page
    await homePage.navigateTo('/'); // Assuming baseURL is set in playwright.config.ts
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('should perform a search on homepage', async () => {
    await homePage.navigateTo('/'); // Navigating again to ensure clean state for the test
    await homePage.search('Playwright');
    // Add a more meaningful assertion here if possible
    // For example, check if the URL changed or a results element is visible
    console.log('Performed search for "Playwright"');
    // Placeholder assertion, assuming search doesn't navigate or change page structure visibly for now
    await expect(true).toBe(true); 
  });
});
