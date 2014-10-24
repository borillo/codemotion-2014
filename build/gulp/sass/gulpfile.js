var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
   gulp.src('sass/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
   var watcher = gulp.watch('sass/*.scss', ['sass']);
   watcher.on('change', function (event) {
      console.log('Tipo de evento: ' + event.type);
      console.log('Path: ' + event.path);
   });
});
