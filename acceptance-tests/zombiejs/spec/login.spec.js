var Browser = require("zombie");
const SERVER_URL = "http://localhost:3000/";

describe("zombie", function () {

    var browser;

    beforeEach(function () {
        browser = new Browser();
    });

    it("should have defined headless browser", function (next) {
        expect(typeof browser != "undefined").toBe(true);
        expect(browser instanceof Browser).toBe(true);
        next();
    });

    it("should visit the site and see the login form", function (next) {
        browser.visit(SERVER_URL, function () {
            expect(browser.success).toBe(true);
            expect(browser.query("input[value='Login']")).toBeDefined();
            next();
        });
    });

    function login(username, password, done) {
        browser
            .fill('input[name="username"]', username)
            .fill('input[name="password"]', password)
            .pressButton('input[value="Login"]', function () {
                done();
            });
    }

    it("should not be able to login with wrong credentials", function (next) {
        browser.visit(SERVER_URL, function () {
            login('wronguser', 'wrongpassword', function () {
                expect(browser.html("body")).not.toContain("Insanely fast, headless full-stack testing using Node.js");
                expect(browser.query("input[value='Login']")).toBeDefined();
                next();
            });
        });
    });

    it("should be able to login with correct credentials", function (next) {
        browser.visit(SERVER_URL, function () {
            login('admin', '1234', function () {
                expect(browser.html("body")).toContain("Insanely fast, headless full-stack testing using Node.js");
                expect(browser.query("input[value='Login']")).toBeFalsy();
                next();
            });
        });
    });

    it("should logout", function (next) {
        browser.visit(SERVER_URL, function () {
            login('admin', '1234', function () {
                browser.clickLink('#logout', function () {
                    expect(browser.query("input[value='Login']")).toBeDefined();
                    next();
                });
            });
        });
    });
});