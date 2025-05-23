const { test, expect } = require('@playwright/test');
const ApiHelpers = require('../../utils/apiHelpers.js');

describe('Example API Tests', () => {
    let apiHelpers;

    test.beforeAll(async ({ playwright }) => {
        // process.env.API_BASE_URL should be set in the .env files
        // For this example, we expect it to be https://jsonplaceholder.typicode.com
        apiHelpers = new ApiHelpers(playwright.request); 
    });

    test('should fetch users from API and verify response', async () => {
        const response = await apiHelpers.get('/users/1'); // Assumes API_BASE_URL is jsonplaceholder
        expect(response.ok()).toBeTruthy();
        const responseBody = await response.json();
        expect(responseBody.id).toBe(1);
        expect(responseBody.name).toBe('Leanne Graham'); 
    });

    test('should create a new post via API', async () => {
        const postData = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        const response = await apiHelpers.post('/posts', postData); // Assumes API_BASE_URL is jsonplaceholder
        expect(response.status()).toBe(201); 
        const responseBody = await response.json();
        expect(responseBody.title).toBe(postData.title);
        expect(responseBody.body).toBe(postData.body);
        expect(responseBody.userId).toBe(postData.userId);
        expect(responseBody.id).toBeDefined(); 
    });
});
