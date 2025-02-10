import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'e2e-tests', // Specify the directory for tests
  testMatch: '**/*.spec.js', // Match only .spec.js files

  webServer: {
    // Command to start your app (the frontend)
    command: 'npm run start',

    // URL where your app will be served (updated to 8080)
    url: 'http://localhost:8080',

    // Timeout for the server to start
    timeout: 120 * 1000, // 120 seconds

    // Only start a new server if the environment isn't CI (Continuous Integration)
    reuseExistingServer: !process.env.CI,
  },

  use: {
    // Base URL for Playwright to use for navigating in tests (updated to 8080)
    baseURL: 'http://localhost:8080',
  },
})
