import { test, expect } from '@playwright/test';

test('Check home page title', async ({ page }) => {
  await page.goto('http://localhost:8080'); // Local URL for Vue.js app
  const title = await page.title();
  expect(title).toBe('Vue App'); // Update with your Vue app's title
});
