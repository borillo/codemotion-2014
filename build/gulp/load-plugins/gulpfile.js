var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')();

gulp.task('default', function () {
   gulp.src('js/*.js')
      .pipe(plugins.concat('all.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('dist'));
});
