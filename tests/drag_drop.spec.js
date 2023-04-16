// @ts-check
import { test, expect } from '@playwright/test';

test('Test Script click on the box and verify the visibility of the alert box', async ({ page }) => {
  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'Drag and Drop';

  // opening the relevant page
  await page.getByRole('link', { name : testName }).click();

  // saving text content before drag
  const colA_BeforeDrag = await page.locator('#column-a').textContent();
  const colB_BeforeDrag = await page.locator('#column-b').textContent();

  // dragging element A over B
  await page.locator('#column-a').dragTo(page.locator('#column-b'));

  // saving text content after drag
  const colA_AfterDrag = await page.locator('#column-a').textContent();
  const colB_AfterDrag = await page.locator('#column-b').textContent();

  //verify whether the drag was successful 
  if ( colA_BeforeDrag == colB_AfterDrag && colB_BeforeDrag == colA_AfterDrag ){
    console.log("Drag Successful");
  } else {
    console.log("Drag Unsuccessful");
  }

  
});


