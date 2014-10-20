const SERVER_URL = "http://localhost:3000/";

var Nightmare = require('nightmare');

describe("nightmarejs", function () {
    it("should check google main page", function (done) {
        new Nightmare()
            .goto(SERVER_URL)
            .evaluate(function () {
                return document.title;
            }, function (result) {
                expect(result).toBe('Express');
                done();
            })
            .run();
    })
});