const { test, expect } = require('@playwright/test');

test('TC-002: Test Search Functionality', async ({ page }) => {
    console.log('Navigating to Wiley Homepage...');
    await page.goto('https://onlinelibrary.wiley.com/');
    

    console.log('Typing "Computer Science" into the search field...');
    await page.locator('#searchField1').click();
    await page.fill('#searchField1', 'Computer Science');


    console.log('Clicking the search button...');
    await page.locator(
        '#main-content > div > div > div > div > div.container > div > div > div.gutterless.col-md-8 > div.homepage-search-wrapper > div > div > form > button'
    ).click(); 

    
    console.log('Validating the search results...');
    await page.waitForURL('**/action/doSearch?AllField=Computer+Science', { timeout: 10000 });
    const currentURL = page.url();
    expect(currentURL).toContain('action/doSearch?AllField=Computer+Science');
    console.log('Search results page successfully loaded!');
});