const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    // Locators
    get searchInput() { return '#searchInput'; }
    get searchButton() { return '#searchButton'; }

    // Methods
    async search(searchTerm) {
        await this.fillInput(this.searchInput, searchTerm);
        await this.clickElement(this.searchButton);
    }
}

module.exports = HomePage;
