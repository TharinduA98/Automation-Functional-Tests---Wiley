const { test, expect } = require('@playwright/test');

// Test case to validate navigation to the 'Terms of Use' and 'Privacy Policy' pages from the Wiley Online Library homepage.
test('Verify Terms of Use navigation and Privacy Policy navigation', async ({ page }) => {
  // Navigating to the Wiley Online Library homepage and waiting for the page to fully load.
  console.log('Navigating to Wiley Online Library homepage');
  await page.goto('https://onlinelibrary.wiley.com/');
  await page.waitForLoadState('load');

  // Scrolling down to the footer section to access legal and informational links.
  console.log('Scrolling down to the footer');
  await page.locator('#pb-page-content > div > div.pageFooter > footer').scrollIntoViewIfNeeded();

  // Clicking on the "Terms of Use" link in the footer section.
  console.log('Clicking on "Terms of Use" link in the footer');
  await page.click('#pb-page-content > div > div.pageFooter > footer > div > div > div.footer-sections > div > div > div:nth-child(1) > div > ul > li:nth-child(2) > a');

  // Validating successful navigation to the 'Terms of Use' page by verifying the URL.
  console.log('Verifying navigation to the Terms of Use page');
  await page.waitForURL('https://onlinelibrary.wiley.com/terms-and-conditions', { timeout: 10000 });
  expect(page.url()).toBe('https://onlinelibrary.wiley.com/terms-and-conditions');

  // Locating the Privacy Policy link on the Terms of Use page and ensuring it is visible on the viewport.
  console.log('Scrolling to the Privacy Policy link...');
  const privacyPolicyLocator = page.locator('#rich-text-9d65c64f-a479-4399-9b9b-3be8b16b1561 > p:nth-child(1)');
  await privacyPolicyLocator.scrollIntoViewIfNeeded();

  // Clicking the Privacy Policy link to navigate to the 'Privacy Policy' page.
  console.log('Clicking on the Privacy Policy link...');
  await page.click('#rich-text-9d65c64f-a479-4399-9b9b-3be8b16b1561 > p:nth-child(1) > a:nth-child(2)');

  // Verifying that the user is successfully redirected to the Privacy Policy page by matching the URL.
  console.log('Verifying navigation to the Privacy Policy page');
  await page.waitForURL('https://www.wiley.com/en-us/privacy?_gl=1*1t3kavy*_gcl_au*MjI5NzM5MDMyLjE3MzM4MDM2Njc.', { timeout: 10000 });
  expect(page.url()).toBe('https://www.wiley.com/en-us/privacy?_gl=1*1t3kavy*_gcl_au*MjI5NzM5MDMyLjE3MzM4MDM2Njc.');

  // Final confirmation of successful test execution.
  console.log('Test passed successfully!');
});
