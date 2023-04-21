// @ts-check
import { test, expect } from '@playwright/test';

test('Interacting with jquery ui elements', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'JQuery UI Menus';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // triggering pdf download
  await page.getByRole('link', { name: 'Enabled' }).click();
  await page.getByRole('link', { name: 'Downloads' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'PDF' }).click();
  const download = await downloadPromise;

  // triggering csv download
  await page.getByRole('link', { name: 'Enabled' }).click();
  await page.getByRole('link', { name: 'Downloads' }).click();
  const download1Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'CSV' }).click();
  const download1 = await download1Promise;

  // triggering excel download
  await page.getByRole('link', { name: 'Enabled' }).click();
  await page.getByRole('link', { name: 'Downloads' }).click();
  const download2Promise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Excel' }).click();
  const download2 = await download2Promise;

  // clicking go back button
  await page.getByRole('link', { name: 'Enabled' }).click();
  await page.getByRole('link', { name: 'Back to JQuery UI' }).click();
  await page.getByRole('link', { name: 'Menu' }).click();



  

});



  

