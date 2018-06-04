var GoogleHome = function() {
    var searchInput = element(by.name('q'));
    var beLuckyButton = element(by.name('btnI'));
    var searchButton = element(by.name('btnK'));

    this.get = function() {
        browser.get('http://www.google.com');
    };

    this.setSearchInput = function(name) {
        searchInput.sendKeys(name);
    };

    this.clickSearchButton = function() {
        searchButton.click();
    };

    this.clickBeLuckyButton = function() {
        beLuckyButton.click();
    };

    this.isBeLuckyButtonDisplayed = function() {
        return beLuckyButton.isPresent();
    };
};
module.exports = new GoogleHome();