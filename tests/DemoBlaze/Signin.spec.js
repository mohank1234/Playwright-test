const {test, expect} = require('@playwright/test')
//import {test ,expect} from '@playwright/test';

test('Signin', async ({page})=>
{
    await page.goto('https://www.demoblaze.com/');

    const confirmpage =await page.locator('cat');
    if(confirmpage.isVisible())
    {
        //SignUp

       const sign = await page.locator('a[id="signin2"]');
       if(sign.isVisible)
       {
        await sign.click();

        const signpage =await page.getByText('Sign up')
        if(signpage.isVisible)
        {
            console.log('sucessfully navigfated to siohgn page');
            // creaye user

            console.log("Create the user");

            await page.locator('#sign-username').fill('QAEngineer')
            await page.locator('#sign-password').fill('@QAEngineer@1')
            await page.locator('button[onclick="register()"]').click()
            console.log('Successfulli signed up')
        }
 

       }else
        {
        console.log("sign in is not visible")
        }

    }else
    {
       console.log('Failed to naviagte to home page'); 
    }
    


})
