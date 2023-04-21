// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to do an infinite scroll', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Infinite Scroll';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // stroring the locators of the para
  const paraLocator = await page.locator('.jscroll-added').all();
  const numPara = 1000; // set number of paragraphs you want to load

  // scrolling till the given number of paragraphs are visible
  while (paraLocator.length < numPara) {
    await page.mouse.wheel(0,100)
  paraLocator.push(page.locator('.jscroll-added'))

  }
});


