// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to locate various iframes', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Frames';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact : true }).click();

  // opening nested frames page
  await page.getByRole('link', {name : "Nested Frames"}).click();

  await page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-left"]').getByText('LEFT').click();
  await page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]').getByText('MIDDLE').click();
  await page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-right"]').getByText('RIGHT').click();
  await page.frameLocator('frame[name="frame-bottom"]').getByText('BOTTOM').click();
 
});

test('Test Script to locate iframe containg TinyMCE, enter and edit text', async ({ page }) => {
    // go to the internet website 
    await page.goto('https://the-internet.herokuapp.com/');
  
    // expect a title "to contain" a substring
    await expect(page).toHaveTitle('The Internet');
  
    // enter the test name to be tested
    const testName = 'Frames';
  
    // opening the relevant page
    await page.getByRole('link', { name : testName, exact : true }).click();
  
    // opening nested frames page
    await page.getByRole('link', {name : "iFrame"}).click();

    // locating tinymce and doing some text editing
    await page.frameLocator('iframe[title="Rich Text Area"]').locator('#tinymce').click();
    await page.frameLocator('iframe[title="Rich Text Area"]').locator('#tinymce').clear();
    await page.getByRole('button', { name: 'Bold' }).click();
    await page.getByRole('button', { name: 'Italic' }).click();
    await page.getByRole('menuitem', { name: 'View' }).click();
    await page.getByRole('menuitemcheckbox', { name: 'Visual aids' }).click();
    await page.getByRole('menuitem', { name: 'Format' }).click();
    await page.getByText('Text color').click();
    await page.getByRole('menuitemcheckbox', { name: 'Red', exact: true }).click();
    await page.frameLocator('iframe[title="Rich Text Area"]').getByRole('paragraph').click();
    await page.frameLocator('iframe[title="Rich Text Area"]').locator('#tinymce').fill('CREATING SOME COOL PLAYWRIGHT SCRIPTS');
  
    
  });
  

