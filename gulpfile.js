var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    bootlint = require('gulp-bootlint'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('builds/boot4_firstlook/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('html', function() {
  gulp.src('builds/boot4_firstlook/**/*.html')
  .pipe(bootlint());
});

gulp.task('css', function() {
    gulp.src('builds/boot4_firstlook/css/*.css');
});

gulp.task('watch', function() {
    gulp.watch('builds/boot4_firstlook/js/**/*', ['js']);
    gulp.watch('builds/boot4_firstlook/css/**/*.css', ['css']);
    gulp.watch(['builds/boot4_firstlook/**/*.html'
    ], ['html']);
});

gulp.task('webserver', function() {
    gulp.src('builds/boot4_firstlook/')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
