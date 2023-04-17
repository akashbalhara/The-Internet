// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to verify the visibility of a modal when the mouse is move out of viewport', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Exit Intent';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  const element = await page.$('html');

  // Move the mouse to a position outside the element to trigger mouseleave
  const elementHandle = page.locator('h3');
  // not working yet

});


