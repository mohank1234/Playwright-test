const { test, expect } = require('@playwright/test');

test('Navigation&getContent', async ({ page }) => 
{
    await page.goto('https://www.demoblaze.com/');
    const confirmpage =await page.locator('cat');
    if(confirmpage.isVisible())
    {
        console.log('Successfully navigated to home page of DemoBlaze');
        //get all contenet from the home page 

        // await page.getByclass('container').innerText()
        // await page.locator('id#narvbarx').innerText()

        console.log('Home page contenet of DemoBlaze is:'+await page.locator('.container').innerText() +
        await page.locator('#narvbarx').innerText())
    }else
    {
        console.log('Failed top navigate')
    }
   await page.close();
})
