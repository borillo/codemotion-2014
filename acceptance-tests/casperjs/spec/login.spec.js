const SERVER_URL = "http://localhost:3000/";

casper.test.begin("should visit the site and see the login form", function (test) {
    casper.start(SERVER_URL)
        .then(function () {
            test.assertExists("input[value='Login']");
        }).run(function () {
            test.done();
        })
});

function login(username, password) {
    return casper.start(SERVER_URL, function () {
        this.sendKeys('input[name="username"]', username);
        this.sendKeys('input[name="password"]', password);
        this.click('input[value="Login"]');
    });
}

casper.test.begin("should not be able to login with wrong credentials", function (test) {
    login("wronguser", "wrongpassword")
        .then(function () {
            test.assertSelectorDoesntHaveText("body", "Insanely fast, headless full-stack testing using Node.js");
            test.assertExists("input[value='Login']");
        }).run(function () {
            test.done();
        })
});
casper.test.begin("should be able to login with correct credentials", function (test) {
    login("admin", "1234")
        .then(function () {
            test.assertSelectorHasText("body", "Insanely fast, headless full-stack testing using Node.js");
            test.assertDoesntExist("input[value='Login']");
        }).run(function () {
            test.done();
        })
});

casper.test.begin("should logout", function (test) {
    login("admin", "1234")
        .then(function () {
            this.click('#logout');
        }).then(function () {
            test.assertExists("input[value='Login']");
        }).run(function () {
            test.done();
        })
});