var gulp       = require('gulp');
var server     = require('gulp-express');

gulp.task('app-server', function () {
    server.run(['app-server.js']);
    gulp.watch(['./dist/js/*.js','./dist/css/*.css'], server.notify);
});

gulp.task('cms-server', function () {
    server.run(['cms-server.js']);
    gulp.watch(['./cms-build/js/*.js','./cms-build/css/*.css'], server.notify);
});

gulp.task('server',['app-server', 'cms-server']);