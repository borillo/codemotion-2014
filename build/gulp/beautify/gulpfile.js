var gulp = require('gulp');
var uglify = require('gulp-uglify');
var beautify = require('gulp-beautify');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');

gulp.task('default', function () {
   gulp.src('js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(gulpif(process.env.NODE_ENV === 'production', uglify()))
      .pipe(gulpif(process.env.NODE_ENV !== 'production', beautify()))
      .pipe(gulp.dest('dist'));
});
