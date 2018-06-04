var googleHomePage = require('../pages/GoogleHome');
var searchResultsPage = require('../pages/SearchResultsPage');

describe('searching functionality', function () {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
        googleHomePage.get();
    });

    it('it should find a car', function () {
        const itemToFind = 'car';
        googleHomePage.setSearchInput(itemToFind);
        googleHomePage.clickSearchButton();
        expect(searchResultsPage.getFoundItemDesc()).toContain('car');
    });

    it('to be lucky functionality', function () {
        googleHomePage.clickBeLuckyButton();
        expect(googleHomePage.isBeLuckyButtonDisplayed()).toBe(false);
    });
});