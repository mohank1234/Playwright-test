import {test, expect} from '@playwright/test'

//const {test, expect} =require ('@playwright/test')

test ('login', async({page})=>
{
    await page.goto('https://www.demoblaze.com/');

    const confirmpage =await page.locator('#cat');
    if(confirmpage.isVisible())
    {
        console.log('Successfully navigated to home page of DemoBlaze');
        //Login
        console.log('Login into account')
        await page.locator('#login2').click();
       //confirm login page
       const confloginpage =await page.locator('h5.modal-title#logInModalLabel')
       if(confloginpage.isVisible())
       {
        console.log('naviagted to login page')

        //Enter Username and password
        console.log('Enter Username and password')

        await page.locator('#loginusername').fill('qaengineer')
        await page.locator('#loginpassword').fill('@qaengineer@1')

        await page.locator('button[onclick="logIn()"]').click()

        const confrimlogin=  page.locator('a',{hasText:'qaengineer'})
        if(confrimlogin.isVisible)
        {
        console.log('user succuessfully logedin')

        //now logout

        console.log('please logout from application')

        await page.locator('#logout2').click()

        if (await confirmpage.isVisible())
        {
        console.log("sucessfully loged out")
        }else
        {
        console.log('failed to logged out') 
        }
        }else
        {
        console.log('user failed to login')
        }

       }


    }
})
