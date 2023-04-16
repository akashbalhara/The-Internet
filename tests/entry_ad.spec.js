// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script click on the box and verify the visibility of the alert box', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Entry Ad';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  // verify the modal is visible, modal title and modal text
  await expect(page.locator('.modal')).toBeVisible();
  await expect(page.locator('.modal-title')).toHaveText('This is a modal window');
  await expect(page.locator('.modal-body')).toHaveText("It's commonly used to encourage a user to take an action (e.g., give their e-mail address to sign up for something or disable their ad blocker).");

  // close the modal
  await page.getByText('Close', { exact: true }).click();

  // reload the page
  await page.reload();

  // verify the modal is not visible 
  await expect(page.locator('.modal')).toBeVisible({ visible : false});

  // enabling the modal again by click the button
  await page.getByRole('link', { name: 'click here' }).click();

  // reload the page
  await page.reload();

  // verify the modal is visible again
  await expect(page.locator('.modal')).toBeVisible();
  
});


