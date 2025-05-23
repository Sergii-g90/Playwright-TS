const { request: playwrightRequest } = require('@playwright/test'); // Renaming to avoid conflict

class ApiHelpers {
    constructor(requestContext = null, apiBaseUrl = process.env.API_BASE_URL) {
        this.request = requestContext;
        this.apiBaseUrl = apiBaseUrl;

        if (!this.apiBaseUrl) {
            console.warn('API_BASE_URL is not set. Please ensure it is defined in your environment configuration.');
        }
    }

    async _getRequestContext() {
        if (!this.request) {
            this.request = await playwrightRequest.newContext();
        }
        return this.request;
    }

    _constructUrl(endpoint) {
        if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
            return endpoint;
        }
        if (!this.apiBaseUrl) {
            throw new Error('API_BASE_URL is not defined, and a full URL was not provided to the request method.');
        }
        // Ensure no double slashes
        return `${this.apiBaseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
    }

    async get(endpoint, options = {}) {
        const request = await this._getRequestContext();
        const fullUrl = this._constructUrl(endpoint);
        return request.get(fullUrl, options);
    }

    async post(endpoint, data = {}, options = {}) {
        const request = await this._getRequestContext();
        const fullUrl = this._constructUrl(endpoint);
        return request.post(fullUrl, { data, ...options });
    }

    async put(endpoint, data = {}, options = {}) {
        const request = await this._getRequestContext();
        const fullUrl = this._constructUrl(endpoint);
        return request.put(fullUrl, { data, ...options });
    }

    async delete(endpoint, options = {}) {
        const request = await this._getRequestContext();
        const fullUrl = this._constructUrl(endpoint);
        return request.delete(fullUrl, options);
    }
}

module.exports = ApiHelpers;
