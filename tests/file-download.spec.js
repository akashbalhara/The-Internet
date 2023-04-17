// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to test download links', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'File Download';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();
  
  // start waiting for the download
  const downloadPromise = page.waitForEvent('download');
  await page.getByText('TextFile.txt').click();
  const download = await downloadPromise;

  // Wait for the download process to complete
  console.log(await download.path());

  


});


