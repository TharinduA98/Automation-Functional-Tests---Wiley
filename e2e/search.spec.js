const { test, expect } = require('@playwright/test');

// Test case to validate the search functionality on the Wiley Online Library homepage.
test('TC-002: Test Search Functionality', async ({ page }) => {
    // Navigating to the Wiley Online Library homepage to begin the search functionality test.
    console.log('Navigating to Wiley Homepage...');
    await page.goto('https://onlinelibrary.wiley.com/');
    
    // Focusing on the search field and entering the query "Computer Science".
    console.log('Typing "Computer Science" into the search field...');
    await page.locator('#searchField1').click();
    await page.fill('#searchField1', 'Computer Science');

    // Initiating the search by clicking the search button.
    console.log('Clicking the search button...');
    await page.locator(
        '#main-content > div > div > div > div > div.container > div > div > div.gutterless.col-md-8 > div.homepage-search-wrapper > div > div > form > button'
    ).click(); 

    // Verifying that the search results page loads successfully and matches the expected URL structure.
    console.log('Validating the search results...');
    await page.waitForURL('**/action/doSearch?AllField=Computer+Science', { timeout: 10000 });
    const currentURL = page.url();
    expect(currentURL).toContain('action/doSearch?AllField=Computer+Science');
    console.log('Search results page successfully loaded!');
});
