var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var server;

gulp.task('server', function () {
    var app = require(__dirname + "/app");
    app.set('port', process.env.PORT || 3000);
    server = app.listen(app.get('port'));
});

gulp.task('acceptance-tests', ['server'], function () {
    return gulp.src('spec/login.spec.js')
        .pipe(jasmine());
});

gulp.task('default', ['acceptance-tests'], function () {
    gulp.watch('spec/**/*.spec.js', function () {
        server.close();
        gulp.run('acceptance-tests');
    });
});