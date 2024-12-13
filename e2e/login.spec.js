const { test, expect } = require('@playwright/test');

test('Login and Logout Test for Wiley', async ({ page }) => {
    console.log('Navigating to Wiley Online Library website...');
    await page.goto('https://onlinelibrary.wiley.com/');


    console.log('Clicking Login / Register button');
    await page.click('#indivLogin > span.sign-in-label');


    console.log('Clicking Individual Login');
    await page.waitForSelector('#pb-page-content > div > div.pageHeader > header > div > div:nth-child(2) > div > div > div > div.pull-right > div > div.pull-right > div > div.navigation-login-dropdown-container > div > ul > li:nth-child(1) > a', { timeout: 30000 });
    await page.click('#pb-page-content > div > div.pageHeader > header > div > div:nth-child(2) > div > div > div > div.pull-right > div > div.pull-right > div > div.navigation-login-dropdown-container > div > ul > li:nth-child(1) > a');

    console.log('Verifying navigation to the Login page...');
    await page.waitForURL('https://wiley.scienceconnect.io/login', { timeout: 10000 });
    expect(page.url()).toBe('https://wiley.scienceconnect.io/login');

    console.log('Waiting for email input page');
    await page.waitForSelector('#email-input', { timeout: 30000 });
    console.log('Entering email');
    await page.fill('#email-input', 'tharindu.a999@gmail.com');


    console.log('Clicking Continue after entering email');
    await page.click('#sign-in-btn');

    console.log('Verifying navigation to the Login password page...');
    await page.waitForURL('https://wiley.scienceconnect.io/login/password', { timeout: 10000 });
    expect(page.url()).toBe('https://wiley.scienceconnect.io/login/password');


    console.log('Waiting for password input page');
    await page.waitForSelector('#pass-input', { timeout: 30000 });
    console.log('Entering password');
    await page.fill('#pass-input', '@test12345@');


    console.log('Clicking Continue after entering password');
    await page.click('#password-sign-in-btn');

    console.log('Verifying navigation to the home page...');
    await page.waitForURL('https://onlinelibrary.wiley.com/', { timeout: 10000 });
    expect(page.url()).toBe('https://onlinelibrary.wiley.com/');


    console.log('Verifying login success');
    await page.waitForSelector('#indivLogin > span.profile-text', { timeout: 30000 });
    const profileText = await page.textContent('#indivLogin > span.profile-text');
    expect(profileText).toBe('Tharindu');
    console.log('Login successful!');


    console.log('Clicking profile button...');
    await page.click('#indivLogin > span.profile-text');
    console.log('Clicking Logout button');
    await page.click('#pb-page-content > div > div.pageHeader > header > div > div:nth-child(2) > div > div > div > div.pull-right > div > div.pull-right > div > div.navigation-login-dropdown-container > div.navigation-login-dropdown > ul > li:nth-child(2) > a');


    console.log('Verifying logout success');
    await page.waitForSelector('#indivLogin > span.sign-in-label', { timeout: 30000 });
    const loginButtonText = await page.textContent('#indivLogin > span.sign-in-label');
    expect(loginButtonText).toBe('Login / Register');
    console.log('Logout successful!');
});
