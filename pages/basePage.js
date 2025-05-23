class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async clickElement(selector) {
        await this.page.click(selector);
    }

    async fillInput(selector, text) {
        await this.page.fill(selector, text);
    }

    async getElementText(selector) {
        return await this.page.textContent(selector);
    }

    async selectDropdownOption(selector, optionValue) {
        await this.page.selectOption(selector, optionValue);
    }

    async waitForElementVisible(selector, timeout = 5000) {
        await this.page.waitForSelector(selector, { state: 'visible', timeout });
    }
}

module.exports = BasePage;
