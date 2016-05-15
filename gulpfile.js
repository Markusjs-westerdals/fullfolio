var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({pretty: false}))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});
gulp.task('cv', function() {
  gulp.src('sass/cv.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sass({pretty: false}))
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(gulp.dest('./css/'))
})

gulp.task('views', function() {
  gulp.src('index.pug')
      .pipe(pug({pretty: false}))
      .pipe(gulp.dest('.'))
      .pipe(livereload());
})

//Watch task
gulp.task('watch', function() {
  gulp.watch('sass/**/*.scss',['styles']);
  gulp.watch('sass/cv.scss',['cv']);
  gulp.watch('templates/**/*.pug',['views']);
});
// gulp.task('default',function() {
//     livereload.listen('8888')
//
// });

gulp.task('default', ['watch', 'styles', 'cv', 'views'], function() {
  livereload.listen('8888')
  console.log('listening on 8888');
});
