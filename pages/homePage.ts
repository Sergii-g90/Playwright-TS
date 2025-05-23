import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage'; // Using relative path as per example

export class HomePage extends BasePage {
  // Locators
  get searchInput(): Locator {
    return this.page.locator('#searchInput'); // Example selector from original JS
  }

  get searchButton(): Locator {
    return this.page.locator('#searchButton'); // Example selector from original JS
  }

  constructor(page: Page) {
    super(page);
  }

  async search(searchTerm: string): Promise<void> {
    await this.fillInput(this.searchInput, searchTerm);
    await this.clickElement(this.searchButton);
    // Potentially add navigation checks or other post-search actions
  }
}
