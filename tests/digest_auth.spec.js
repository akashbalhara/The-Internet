// @ts-check
import { test, expect } from '@playwright/test';
test.use({httpCredentials : {username : 'admin', password : 'admin'}});

test('Digest authentication ', async ({ page, browser }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Digest Authentication';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // assert that success test is getting visible
  expect (await page.getByRole('paragraph').textContent()).toContain('Congratulations! You must have the proper credentials.');

});

