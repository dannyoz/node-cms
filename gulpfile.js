'use strict';

var gulp       = require('gulp');

var servers    = require('./gulp-tasks/servers');
var appScripts = require('./gulp-tasks/app-scripts');
var cmsScripts = require('./gulp-tasks/cms-scripts');
var sassTasks  = require('./gulp-tasks/sass');


gulp.task('watch', function () {
  gulp.watch(['app/**/*.js','!app/compiled/*.js','app/**/*.tmpl.html'], ['jsMin']);
  gulp.watch('app/**/**.*scss', ['sass']);
  gulp.watch(['cms/**/*.js','!cms/compiled/*.js','cms/**/*.tmpl.html'], ['cms-jsMin']);
  gulp.watch('cms/**/**.*scss', ['cms-sass']);
});


gulp.task('default', ['jsMin', 'cms-jsMin', 'watch']);