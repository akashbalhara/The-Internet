// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect a new notification after clicking a button', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Notification Messages';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // return the notification text
  console.log(await page.locator('.flash.notice').innerText());

  // clicking the link
  await page.getByRole('link', {name : 'Click here'}).click();

  // wait for page to load
  await page.waitForTimeout(500);

  // return the notification text
  console.log(await page.locator('.flash.notice').innerText());

});