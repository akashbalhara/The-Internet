// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to use a spin button', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Inputs';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // setting the input
  await page.getByRole('spinbutton').fill('25');

});


