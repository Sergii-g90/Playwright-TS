import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiHelpers {
  private request: APIRequestContext;
  private apiBaseUrl?: string;

  constructor(requestContext: APIRequestContext, apiBaseUrl: string | undefined = process.env.API_BASE_URL) {
    this.request = requestContext;
    this.apiBaseUrl = apiBaseUrl;
    if (!this.apiBaseUrl) {
      console.warn('API_BASE_URL is not set. API calls might fail if full URLs are not provided.');
    }
  }

  private _constructUrl(endpoint: string): string {
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
      return endpoint;
    }
    if (!this.apiBaseUrl) {
      throw new Error('API_BASE_URL is not defined, cannot construct full URL for endpoint: ' + endpoint);
    }
    // Ensure no double slashes
    return `${this.apiBaseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  }

  async get(endpoint: string, options: any = {}): Promise<APIResponse> {
    const fullUrl = this._constructUrl(endpoint);
    return this.request.get(fullUrl, options);
  }

  async post(endpoint: string, data: any = {}, options: any = {}): Promise<APIResponse> {
    const fullUrl = this._constructUrl(endpoint);
    return this.request.post(fullUrl, { data, ...options });
  }

  async put(endpoint: string, data: any = {}, options: any = {}): Promise<APIResponse> {
    const fullUrl = this._constructUrl(endpoint);
    return this.request.put(fullUrl, { data, ...options });
  }

  async delete(endpoint: string, options: any = {}): Promise<APIResponse> {
    const fullUrl = this._constructUrl(endpoint);
    return this.request.delete(fullUrl, options);
  }
}
