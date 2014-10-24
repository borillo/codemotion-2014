var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('default', function () {
   var files = [
      '**/*.html',
      '**/*.css'
   ];

   browserSync.init(files, {
      server: {
         baseDir: '.'
      }
   });
});
