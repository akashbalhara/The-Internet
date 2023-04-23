// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to detect and return status codes when navigating ', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Status Codes';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // storing all locators 
  const linkList = await page.getByRole('listitem').all();

  // iterating through each link 
  for (let i = 0 ; i < linkList.length; i++ ) {
    const statusCodeText = await linkList[i].innerText(); // getting link text and corresponding status code
    const url = 'https://the-internet.herokuapp.com/status_codes/'+statusCodeText ; // creating the url to hit
    const apiRequest = page.request
    const requestResult = apiRequest.fetch(url); // fetching the data after hitting url
    const statusCodeResult = (await requestResult).status() // storing status codes
    // assert that status code is as expected
    expect (statusCodeResult).toBe(Number(statusCodeText));
    
  }

});

