'use strict';

var gulp       = require('gulp');
var server     = require('gulp-express');
var browserify = require('gulp-browserify');
var minifyHtml = require('gulp-minify-html');
var uglify     = require('gulp-uglify');
var ngTemplate = require('gulp-ng-template');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var stripDebug = require('gulp-strip-debug');

gulp.task('server', function () {
    server.run(['server.js']);
    gulp.watch(['./dist/js/*.js','./dist/css/*.css'], server.notify);
});

  gulp.task('browserify', function () {
    gulp.src('./app/app.js', {entry: true})
      .pipe(browserify({
        transform: ['babelify']
      }))
      .pipe(gulp.dest('./app/compiled/'));
  });

  gulp.task('ng-templates', function() {
    gulp.src('./app/**/*tmpl.html')
      .pipe(minifyHtml({empty: true, quotes: true}))
      .pipe(ngTemplate({
        moduleName: 'app',
        standalone: false,
        filePath: 'templates.js'
      }))
      .pipe(gulp.dest('./app/compiled/'));  // output file: 'dist/js/templates.js' 
  });

gulp.task('scripts', ['browserify','ng-templates'], function() {
  return gulp.src(['./app/compiled/app.js','./app/compiled/templates.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('jsMin', function () {
  gulp.src('./dist/js/main.js', {entry: true})
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('./dist/js/min'));
});

gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('watch', function () {
  gulp.watch(['app/**/*.js','!app/compiled/*.js','app/**/*.tmpl.html'], ['scripts']);
  gulp.watch('app/**/**.*scss', ['sass']);
});



gulp.task('default', ['scripts', 'watch']);