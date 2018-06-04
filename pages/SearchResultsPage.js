var SearchResultsPage = function () {
    var foundItemDesc = element(by.xpath("(//div[@class = 'g']//span[@class = 'st'])[1]"));

    this.getFoundItemDesc = function () {
        return foundItemDesc.getText();
    };
};
module.exports = new SearchResultsPage();