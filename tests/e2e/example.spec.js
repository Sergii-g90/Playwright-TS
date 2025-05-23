const { test, expect } = require('@playwright/test');
const HomePage = require('../../pages/homePage.js');

describe('Example E2E Tests', () => {
    test('should navigate to homepage and verify title', async ({ page }) => {
        const homePage = new HomePage(page);
        // The BASE_URL from playwright.config.js will be used
        await homePage.navigateTo('/'); 
        // This will be updated in Part 3 to be more specific, using generic for now
        await expect(page).toHaveTitle(/Example Domain/); 
    });

    test('should perform a search on homepage', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateTo('/');
        await homePage.search('Playwright');
        // Placeholder for actual search result assertion
        console.log('Performed search for "Playwright"');
        await expect(true).toBe(true); // Placeholder assertion
    });
});
