var gulp = require('gulp');
var ugflify = require('gulp-uglify');

gulp.task('default', function() {
   gulp.src('js/*.js')
      .pipe(ugflify())
      .pipe(gulp.dest('dist'));
});
