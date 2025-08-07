
const { test, expect } = require('@playwright/test');

test('DemoNavigation', async ({ page }) => {
 await page.goto('https://demoqa.com');

  const confirmPage = page.locator('img[src="/images/Toolsqa.jpg"]');

  if (await confirmPage.isVisible()) 
  {
    console.log('Page is loaded');

    // Get all content from #app
    const content = await page.locator('div#app').innerText();
    console.log('Home Page Content:\n' + content);

    // Sections to navigate
    const sections = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];
    for(const sec of sections)
    {
      //Navigate to each section
      const select =`text=${sec}`
      await page.waitForSelector(select);
      await page.click(select);
      console.log(`navigated to ${sec} section`);

    // Get content from the current section
    
    const seccontenet = await page.locator('div#app').innerText();
    console.log('Contenet from'+sec+'is :'+seccontenet)
      

    }
  }
  else 
  {
    console.log('Page is not loaded');
  }
});


