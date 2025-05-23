import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async clickElement(selector: string | Locator): Promise<void> {
    if (typeof selector === 'string') {
      await this.page.locator(selector).click();
    } else {
      await selector.click();
    }
  }

  async fillInput(selector: string | Locator, text: string): Promise<void> {
    if (typeof selector === 'string') {
      await this.page.locator(selector).fill(text);
    } else {
      await selector.fill(text);
    }
  }

  async getElementText(selector: string | Locator): Promise<string | null> {
    if (typeof selector === 'string') {
      return this.page.locator(selector).textContent();
    } else {
      return selector.textContent();
    }
  }

  async selectDropdownOption(selector: string | Locator, optionValue: string | { value?: string; label?: string; index?: number }): Promise<void> {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    if (typeof optionValue === 'string') {
      await locator.selectOption(optionValue);
    } else {
      await locator.selectOption(optionValue);
    }
  }

  async waitForElementVisible(selector: string | Locator, timeout: number = 5000): Promise<void> {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    await locator.waitFor({ state: 'visible', timeout });
  }
}
