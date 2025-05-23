import { test, expect, APIRequestContext, PlaywrightTestArgs } from '@playwright/test';
import { ApiHelpers } from '@utils/apiHelpers'; // Using path alias

test.describe('Example API Tests', () => {
  let apiHelpers: ApiHelpers;

  // Use PlaywrightTestArgs to get the 'playwright' object which contains 'request'
  test.beforeAll(async ({ playwright }: PlaywrightTestArgs) => { 
    // process.env.API_BASE_URL should be set from .env files
    // and is used by default in the ApiHelpers constructor
    apiHelpers = new ApiHelpers(playwright.request);
  });

  test('should fetch users from API and verify response', async () => {
    const response = await apiHelpers.get('/users/1');
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    expect(responseBody.id).toBe(1);
    expect(responseBody.name).toBe('Leanne Graham'); // From jsonplaceholder
  });

  test('should create a new post via API', async () => {
    const postData = { title: 'foo', body: 'bar', userId: 1 };
    const response = await apiHelpers.post('/posts', postData);
    expect(response.status()).toBe(201); // jsonplaceholder returns 201 for POST
    const responseBody = await response.json();
    expect(responseBody.title).toBe(postData.title);
    expect(responseBody.body).toBe(postData.body);
    expect(responseBody.userId).toBe(postData.userId);
    expect(responseBody.id).toBeDefined();
  });
});
