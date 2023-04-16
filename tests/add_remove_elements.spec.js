// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to add, detect and delete elements', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Add/Remove Elements';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  // enter the number of buttons to add
  const elementNumber = 5;

  // click the button 
  await page.getByRole('button', {name : 'Add Element'}).click({clickCount : elementNumber});

  // verify the number of buttons added is equal to the selected number and deleting the buttons
  for (let i = elementNumber; i > 0; i--) {
    await page.getByRole('button', { name: 'Delete' }).first().click();

  }
  
});


