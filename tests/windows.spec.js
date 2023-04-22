// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect a new page ', async ({ page, context }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Multiple Windows';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // Start waiting for new page before clicking.
  const pagePromise = context.waitForEvent('page')
  await page.getByRole(('link'), {name : 'Click Here'}).click();
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  expect (await newPage.getByRole('heading').innerText()).toContain('New Window');
  



});