// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to test download links', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Form Authentication';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // entering correct username and password
  await page.getByRole('textbox' , {name : 'username'}).type('tomsmith');
  await page.getByRole('textbox' , {name : 'password'}).type('SuperSecretPassword!');
  await page.getByRole('button', {name : ' Login'}).click();

  // wait for success page to load
  await page.waitForLoadState('networkidle');

  // assert that correct success message is displayed
  await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');

  // logout 
  await page.getByRole('link', {name : ' Logout'}).click();

  // assert that correct success message is displayed
  await expect(page.locator('.flash.success')).toContainText('You logged out of the secure area!');

  // entering incorrect username and trying to login
  await page.getByRole('textbox' , {name : 'username'}).type('username');
  await page.getByRole('textbox' , {name : 'password'}).type('SuperSecretPassword!');
  await page.getByRole('button', {name : ' Login'}).click();
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');

  // entering incorrect password and trying to login
  await page.getByRole('textbox' , {name : 'username'}).type('tomsmith');
  await page.getByRole('textbox' , {name : 'password'}).type('password');
  await page.getByRole('button', {name : ' Login'}).click();
  await expect(page.locator('.flash.error')).toContainText('Your password is invalid!');

});


