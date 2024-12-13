const { test, expect } = require('@playwright/test');

test('Verify Terms of Use navigation and Privacy Policy navigation', async ({ page }) => {
  console.log('Navigating to Wiley Online Library homepage...');
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.waitForLoadState('load');

  console.log('Scrolling down to the footer...');
  await page.locator('#pb-page-content > div > div.pageFooter > footer').scrollIntoViewIfNeeded();
  

  console.log('Clicking on "Terms of Use" link in the footer...');
  await page.click('#pb-page-content > div > div.pageFooter > footer > div > div > div.footer-sections > div > div > div:nth-child(1) > div > ul > li:nth-child(2) > a');


  console.log('Verifying navigation to the Terms of Use page...');
  await page.waitForURL('https://onlinelibrary.wiley.com/terms-and-conditions', { timeout: 10000 });
  expect(page.url()).toBe('https://onlinelibrary.wiley.com/terms-and-conditions');


  console.log('Scrolling to the Privacy Policy link...');
  const privacyPolicyLocator = page.locator('#rich-text-9d65c64f-a479-4399-9b9b-3be8b16b1561 > p:nth-child(1)');
  await privacyPolicyLocator.scrollIntoViewIfNeeded();


  console.log('Clicking on the Privacy Policy link...');
  await page.click('#rich-text-9d65c64f-a479-4399-9b9b-3be8b16b1561 > p:nth-child(1) > a:nth-child(2)');


  console.log('Verifying navigation to the Privacy Policy page...');
  await page.waitForURL('https://www.wiley.com/en-us/privacy?_gl=1*1t3kavy*_gcl_au*MjI5NzM5MDMyLjE3MzM4MDM2Njc.', { timeout: 10000 });
  expect(page.url()).toBe('https://www.wiley.com/en-us/privacy?_gl=1*1t3kavy*_gcl_au*MjI5NzM5MDMyLjE3MzM4MDM2Njc.');

  console.log('Test passed successfully!');
});
