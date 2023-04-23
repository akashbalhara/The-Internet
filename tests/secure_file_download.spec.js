// @ts-check
import { test, expect } from '@playwright/test';
test.use({httpCredentials : {username : 'admin', password : 'admin'}});

test('Secure file downloads ', async ({ page, browser }) => {
    
    test.slow(); // marking as slow as file download may take time
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Secure File Download';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // assert that success test is getting visible
  expect (await page.getByRole('heading').textContent()).toContain('Secure File Downloader');

  // storing all the links inside an array
  const divLocator = page.locator('.example');
  const linkList = await divLocator.getByRole('link').all();
  
  // clicking each link and starting download // downloading only first 10 files as files take time to download
  for ( let i = 0; i < linkList.length; i++) {
    // start waiting for the download
  const downloadPromise = page.waitForEvent('download');
  await linkList[i].click();
  const download = await downloadPromise;

  //Wait for the download process to complete
  console.log(await download.path());
  }


});

