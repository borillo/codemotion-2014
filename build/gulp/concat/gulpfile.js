var gulp = require('gulp');
var ugflify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('default', function() {
   gulp.src('js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(ugflify())
      .pipe(gulp.dest('dist'));
});
