var gulp = require('gulp');

gulp.task('init', function() {
   console.log('Inicializamos el proyecto ...');
});

gulp.task('default', ['init'], function() {
   console.log('Gulp works!!');
});
