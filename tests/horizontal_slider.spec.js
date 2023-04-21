// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script to test download links', async ({ page }) => {

  test.slow(); // marking as slow as file download may take time
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Horizontal Slider';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // locating slider, slider value and setting the value we want 
  const slider = page.locator('div.sliderContainer input');
  var sliderValue = Number(await page.locator('#range').innerText());
  const range = 3.5 // set a value between 0-5 , intervals of 0.5 only


  while (sliderValue != range) {

  await slider.press('ArrowRight');
  var sliderValue = Number(await page.locator('#range').innerText());
    if (sliderValue == 5) {
      break;
    }
    
  }

});


