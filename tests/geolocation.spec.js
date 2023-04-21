// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to use Geolocation in playwright', async ({ page, context }) => {

  test.slow(); // marking as slow as file download may take time
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Geolocation';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();
  
  // setting the coordinates
  const coords = { latitude: 50.9245541, longitude: 5.2435062 };
  context.setGeolocation(coords);
  await page.getByRole('button', {name  : 'Where am I?'}).click();
  
  // asserting that the correct coordinates are displayed 
  expect(Number(await page.locator('#lat-value').textContent())).toBe(coords.latitude);
  expect(Number(await page.locator('#long-value').textContent())).toBe(coords.longitude);




});


