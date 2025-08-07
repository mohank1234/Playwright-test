import {test,expect} from '@playwright/test'

//const{test, expect} = require('@playwright/test')

test('CheckOutandBuy', async ({page})=>
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
                console.log('user succuessfully completeled login')
                // get the contenet
                let allcontent =[];
                let isNextPageAvailble =true;
                while(isNextPageAvailble)
                {
                    //get content from current page
                    const getcon = await page.locator('#contcont').innerText();
                    allcontent.push(getcon)
                    //check for next page
                    const nextpage = await page.locator('//button[text()="Next"]')
                    if(nextpage.isEnabled())
                    {
                        await nextpage.scrollIntoViewIfNeeded();
                        await nextpage.click()
                        console.log('clikced next page')
                        //await page.waitForLoadState('load')
                    } else
                        {
                            isNextPageAvailable = false;  // Exit loop if no "Next" page button is available
                            console.log('Next page is not enabled')
                        }
                    console.log(allcontent);
                }
            }
            else
            {
            console.log('user failed to login')
            }

       }
    }
})
