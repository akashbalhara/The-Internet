// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect a keyboard key presses', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Key Presses';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // generates a random code between 65 (A) and 90 (Z)
  const keyCode = Math.floor(Math.random() * 26) + 65;
  const key = String.fromCharCode(keyCode); 

  // pressing the randomly generated key
  await page.keyboard.press(key);

  // assert that the correct key is getting displayed
  expect(await page.locator('#result').textContent()).toContain(key);



});