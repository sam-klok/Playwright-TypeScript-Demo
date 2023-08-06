import { test, expect } from '@playwright/test';

// this test was recorded by codegen

test('test', async ({ page }) => {
  await page.goto('https://github.com/sam-klok');
  await page.getByRole('link', { name: 'Repositories 79' }).click();
  await page.getByRole('button', { name: 'Search or jump to...' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('owner:sam-klok cucumber');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'sam-klok/cucumber-js-demo' }).click();
});