// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to test download links', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'File Upload';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // clicking the choose file button
  await page.locator('#file-upload').click();

  //uploading file
  await page.locator("//input[@id='file-upload']").setInputFiles('./tests/fixtures/sample.pdf');

  // clicking the upload button
  await page.getByRole('button', { name: 'Upload' }).click();

  // wait for navigation
  await page.waitForLoadState('networkidle');

  // assert if file uploaded message is displayed
  await expect(page.getByRole('heading')).toHaveText('File Uploaded!');

  // assert if the correct file name is getting displayed
  await expect(page.locator("//div[@id='uploaded-files']")).toContainText('sample.pdf');



  
  

  
  


});


