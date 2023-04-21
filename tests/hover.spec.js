// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to hover over elements', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Hovers';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // storing locators to all images
  const imgLocator = await page.getByRole('img', {name : 'User Avatar'}).all();


  // iterating through the images and hovering over them
  for (let i = 1 ; i <= imgLocator.length; i++) {
    await imgLocator[i-1].hover();

    // assert that the correct user name and number is visible
    expect (await page.locator('.figcaption').nth(i-1).innerText()).toContain('name: user'+i);
  }

  

});


