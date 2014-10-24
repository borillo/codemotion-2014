var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var gulpif = require('gulp-if');

gulp.task('default', function () {
   gulp.src(['js/*.js', 'coffee/*.coffee'])
      .pipe(gulpif(/[.]coffee$/, coffee()))
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});
