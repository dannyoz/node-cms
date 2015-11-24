var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var minifyHtml = require('gulp-minify-html');
var uglify     = require('gulp-uglify');
var ngTemplate = require('gulp-ng-template');
var concat     = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('cms-browserify', function () {
  gulp.src('./cms/cms.js', {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./cms/compiled/'));
});

gulp.task('cms-ng-templates', function() {
  gulp.src('./cms/**/*tmpl.html')
    .pipe(minifyHtml({empty: true, quotes: true}))
    .pipe(ngTemplate({
      moduleName: 'cms',
      standalone: false,
      filePath: 'templates.js'
    }))
    .pipe(gulp.dest('./cms/compiled/'));  // output file: 'cms-build/js/templates.js' 
});

gulp.task('cms-scripts', ['cms-browserify','cms-ng-templates'], function() {
  return gulp.src(['./cms/compiled/cms.js','./cms/compiled/templates.js'])
    .pipe(ngAnnotate())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./cms-build/js'));
});

gulp.task('cms-jsMin', ['cms-scripts'], function () {
  gulp.src('./cms-build/js/main.js', {entry: true})
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest('./cms-build/js/min'));
});