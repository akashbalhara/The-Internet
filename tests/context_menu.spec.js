// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script click on the box and verify the visibility of the alert box', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Context Menu';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  page.on('dialog', async dialog => {
    // Verify type of dialog
    expect(dialog.type()).toContain('alert');   
    
    // verify message of alert
    expect(dialog.message()).toContain('You selected a context menu');
    
    //click on alert ok button
    await dialog.accept();
  });

  // locating and right clicking the hot-spot
  await page.locator('#hot-spot').click({button : 'right'});

  


 
});


