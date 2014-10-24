var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('default', function () {
   var cf = gulp.src('coffee/*.coffee')
                    .pipe(coffee());

   var js = gulp.src('js/*.js');

   return es.merge(cf, js)
            .pipe(concat('all.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'));
});
