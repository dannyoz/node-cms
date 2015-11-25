var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var minifyHtml = require('gulp-minify-html');
var uglify     = require('gulp-uglify');
var ngTemplate = require('gulp-ng-template');
var concat     = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var ngAnnotate = require('gulp-ng-annotate');

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
    .pipe(ngAnnotate())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('jsMin', ['scripts'], function () {
  gulp.src('./dist/js/main.js', {entry: true})
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('./dist/js/min'));
});