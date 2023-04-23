// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect and return status codes when navigating ', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Slow Resources';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();
  
  // requesting an api request
  const apiRequest = page.request
  const requestResult = apiRequest.fetch('https://the-internet.herokuapp.com/slow_external') //fetching the data after hitting url
  
  const statusCodeResult = (await requestResult).status();
  
  // assert that the correct status code is received
  expect(statusCodeResult).toBe(503);


});

