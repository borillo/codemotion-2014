const SERVER_URL = "http://localhost:3000/";

function notAnAngularApplication() {
    browser.ignoreSynchronization = true;
}

describe('protractor', function () {
    var ptor;

    beforeEach(function () {
        notAnAngularApplication();
        ptor = protractor.getInstance()
    });

    it("should visit the site and see the login form", function () {
        browser.get(SERVER_URL);

        expect(element(by.css(("input[value='Login']")))).toBeDefined();
    });

    function login(username, password) {
        element(by.css('input[name="username"]')).sendKeys(username);
        element(by.css('input[name="password"]')).sendKeys(password);
        element(by.css('input[value="Login"]')).click();
    }

    it("should be able to login with correct credentials", function (next) {
        browser.get(SERVER_URL);

        login('admin', '1234');

        ptor.wait(function() {
            return ptor.getCurrentUrl().then(function(url) {
                return (url.indexOf(ptor.baseUrl + '/login') !== -1);
            });
        });

        expect(element(by.css("input[value='Login']")).isPresent()).toBe(false);
        next();
    });
});