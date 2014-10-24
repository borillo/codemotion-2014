var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
   gulp.src('sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});

gulp.task('default', function() {
   gulp.watch('sass/*.scss', ['sass']);
});
