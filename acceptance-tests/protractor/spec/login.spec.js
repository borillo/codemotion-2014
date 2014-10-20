const SERVER_URL = "http://localhost:3000/";

function notAnAngularApplication() {
    browser.ignoreSynchronization = true;
}

describe('protractor', function () {
    beforeEach(function() {
        notAnAngularApplication();
    });

    it("should visit the site and see the login form", function () {
        browser.get(SERVER_URL);

        expect(element(by.css(("input[value='Login']")))).toBeDefined();
    });
});