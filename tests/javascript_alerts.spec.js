// @ts-check
import { test, expect } from '@playwright/test';

test('Javascipts alert', async ({ page }) => {

  // go to the internet website 
  await page.goto('https://the-internet.herokuapp.com/');

  // expect a title "to contain" a substring
  await expect(page).toHaveTitle('The Internet');

  // enter the test name to be tested
  const testName = 'JavaScript Alerts';

  // opening the relevant page
  await page.getByRole('link', { name : testName, exact: true  }).click();

  // clicking js alert, playwright will dismiss it by itself
  await page.getByRole('button', {name : 'Click for JS Alert', exact : true}).click();

  // assert the result text
  expect(await page.locator('#result').innerText()).toContain('You successfully clicked an alert');

});


test('Javascipts confirmation accept', async ({ page }) => {

    // go to the internet website 
    await page.goto('https://the-internet.herokuapp.com/');
  
    // expect a title "to contain" a substring
    await expect(page).toHaveTitle('The Internet');
  
    // enter the test name to be tested
    const testName = 'JavaScript Alerts';
  
    // opening the relevant page
    await page.getByRole('link', { name : testName, exact: true  }).click();
  
    // alerting playwright to accept the js confirmation
    page.on('dialog', dialog => dialog.accept());
  
    // clicking the button to trigger the confirmation
    await page.getByRole('button', {name : 'Click for JS Confirm', exact : true}).click();
  
    // assert the result text
    expect(await page.locator('#result').innerText()).toContain('You clicked: Ok');
    
  });

  test('Javascipts confirmation reject', async ({ page }) => {

    // go to the internet website 
    await page.goto('https://the-internet.herokuapp.com/');
  
    // expect a title "to contain" a substring
    await expect(page).toHaveTitle('The Internet');
  
    // enter the test name to be tested
    const testName = 'JavaScript Alerts';
  
    // opening the relevant page
    await page.getByRole('link', { name : testName, exact: true  }).click();

    // alerting playwright to reject the js confirmation
    page.on('dialog', dialog => dialog.dismiss());
  
    // clicking the button to trigger the confirmation
    await page.getByRole('button', {name : 'Click for JS Confirm', exact : true}).click();
  
    // assert the result text
    expect(await page.locator('#result').innerText()).toContain('You clicked: Cancel');
    
  });  

  test('Javascipts text prompt', async ({ page }) => {

    // go to the internet website 
    await page.goto('https://the-internet.herokuapp.com/');
  
    // expect a title "to contain" a substring
    await expect(page).toHaveTitle('The Internet');
  
    // enter the test name to be tested
    const testName = 'JavaScript Alerts';
  
    // opening the relevant page
    await page.getByRole('link', { name : testName, exact: true  }).click();

    // enter the text to be written in the prompt
    const text = 'TEST 101';

    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toEqual('I am a JS prompt');
        await dialog.accept(text);
      })

      await page.locator('text=Click for JS Prompt').click()
      await expect(page.locator('#result')).toHaveText(
        'You entered: '+text);
      
    
  
    
    
  }); 




