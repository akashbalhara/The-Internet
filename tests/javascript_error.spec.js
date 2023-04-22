// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect a javascript error', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'JavaScript onload event error';

  // alerting playwright to catch any errors
  page.on('pageerror', exception => {
    console.log(`Uncaught exception: "${exception}"`);
  });

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  

});


