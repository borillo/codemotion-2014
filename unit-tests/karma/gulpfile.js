var gulp = require('gulp');
var karma = require('karma').server;

gulp.task('karma', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', ['karma']);