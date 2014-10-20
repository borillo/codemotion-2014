var gulp = require('gulp');
var spawn = require('child_process').spawn;
var server;

gulp.task('server', function () {
    var app = require(__dirname + "/app");
    app.set('port', process.env.PORT || 3000);
    server = app.listen(app.get('port'));
});

gulp.task('acceptance-tests', ['server'], function () {
    var casperChild = spawn('casperjs', ['test', '--includes=spec/pre.js', 'spec/login.spec.js']);

    casperChild.stdout.on('data', function (data) {
        console.log(data.toString().slice(0, -1));
    });
});

gulp.task('default', ['acceptance-tests'], function () {
    gulp.watch('spec/**/*.spec.js', function () {
        server.close();
        gulp.run('acceptance-tests');
    });
});