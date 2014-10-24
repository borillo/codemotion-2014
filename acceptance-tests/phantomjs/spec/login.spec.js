const SERVER_URL = "http://localhost:3000/";

var phantom = require('phantom');

describe("phantomjs", function () {
    it("should check google main page", function (done) {
        phantom.create(function (browser) {
            browser.createPage(function (page) {
                page.open(SERVER_URL, function () {
                    page.evaluate(function () {
                        return document.title;
                    }, function (result) {
                        expect(result).toBe('Express');

                        browser.exit();
                        done();
                    });
                });
            });
        });
    });
});
