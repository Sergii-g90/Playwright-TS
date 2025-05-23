# Playwright Test Automation Framework (TypeScript)

This repository contains a universal Playwright framework designed for robust end-to-end (E2E) and API testing. It is built with TypeScript, follows the Page Object Model (POM) pattern, and supports multiple testing environments.

## Features

*   **Playwright for E2E & API Testing:** Leverages Playwright for reliable cross-browser E2E testing and its powerful API testing capabilities.
*   **TypeScript:** Ensures code quality, maintainability, and developer productivity with static typing.
*   **Page Object Model (POM):** Promotes reusable and maintainable test code by abstracting page interactions.
*   **Multiple Environments:** Supports configuration for different testing environments (e.g., Development, Staging, Production) using `.env` files.
*   **Core Interaction Methods:** Provides a base page with common UI interaction helpers.
*   **API Testing Helpers:** Includes utilities for streamlined API request execution and validation.
*   **Reporting:** Integrated with Playwright's HTML reporter.
*   **Path Aliases:** Pre-configured for cleaner import statements (e.g., `@pages/...`, `@utils/...`).

## Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version recommended, e.g., 18.x or newer)
*   npm (comes with Node.js)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup Environment Configuration:**
    *   The framework uses `.env` files for environment-specific settings. Example files are provided in `config/environments/`.
    *   Copy the example file for the environment you want to configure. For example, for development:
        ```bash
        cp config/environments/.env.development.example config/environments/.env.development
        ```
    *   Update the copied `.env` file (e.g., `config/environments/.env.development`) with your specific `BASE_URL` and `API_BASE_URL`.
        *   Default `BASE_URL` for examples: `http://www.example.com`
        *   Default `API_BASE_URL` for examples: `https://jsonplaceholder.typicode.com`

## Directory Structure

```
.
├── config/                   # Configuration files
│   ├── environments/         # Environment-specific .env files (and examples)
│   └── playwright.config.ts  # Main Playwright configuration
├── dist/                     # Compiled JavaScript output (from TypeScript) - ignored by Git
├── fixtures/                 # Test data files (e.g., JSON, CSV) - currently empty
├── node_modules/             # Project dependencies - ignored by Git
├── pages/                    # Page Object Model files
│   ├── basePage.ts           # Base page with common methods
│   └── homePage.ts           # Example page object
├── playwright-report/        # Playwright HTML test execution reports - ignored by Git
├── reporters/                # Custom reporters (if any) - currently empty
├── tests/                    # Test files (specs)
│   ├── api/                  # API tests
│   │   └── example.api.spec.ts
│   └── e2e/                  # End-to-end UI tests
│       └── example.e2e.spec.ts
├── utils/                    # Utility functions
│   └── apiHelpers.ts         # API testing helper class
├── .gitignore                # Specifies intentionally untracked files
├── package-lock.json         # Records exact versions of dependencies
├── package.json              # Project metadata and scripts
├── README.md                 # This file
└── tsconfig.json             # TypeScript compiler configuration
```

## Running Tests

### 1. Type Checking

Before running tests, it's good practice to check for any TypeScript errors:
```bash
npm run typecheck
```

### 2. Building the Project (Optional)

Playwright can run TypeScript files directly. However, if you want to compile the TypeScript to JavaScript (output to `./dist/`):
```bash
npm run build
```
To clean the `dist` directory:
```bash
npm run clean
```

### 3. Executing Tests

Specify the target environment using the `TEST_ENV` variable. If not set, it defaults to `development`.

*   **Run all tests (defaulting to Development environment):**
    ```bash
    npm test
    ```
*   **Run tests for a specific environment:**
    ```bash
    # Development
    npm run test:dev

    # Staging
    npm run test:staging

    # Production
    npm run test:prod
    ```
*   **Run only E2E tests (defaulting to Development):**
    ```bash
    npm run test:e2e
    ```
*   **Run only API tests (defaulting to Development):**
    ```bash
    npm run test:api
    ```
*   **Run specific test files or tests:**
    Refer to Playwright CLI documentation for more granular control (e.g., running a single file, a single test, or tests in a specific browser).
    Example:
    ```bash
    TEST_ENV=development npx playwright test tests/e2e/example.e2e.spec.ts --project=chromium
    ```

### Verifying the Setup (Important Note)

During automated setup, there were indications of potential issues with the test execution environment's ability to resolve locally installed Node.js modules for `tsc` (TypeScript compiler) and `@playwright/test`. While the framework code and configuration have been set up for TypeScript, **it is crucial to verify the setup in your local environment.**

Please ensure you can successfully run:
1. `npm run typecheck`
2. `npm test` (or `npm run test:dev`)

If you encounter issues like "tsc: not found" or "Cannot find module '@playwright/test'", please double-check your Node.js and npm installation, and ensure dependencies were installed correctly with `npm install`.

## Viewing Test Reports

After test execution, an HTML report is generated in the `playwright-report/` directory (at the project root). Open `playwright-report/index.html` in your browser to view the detailed results.

## Contributing

Contributions are welcome! Please follow standard coding practices and ensure tests pass before submitting pull requests.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.
```
