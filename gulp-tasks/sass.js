var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('cms-sass', function () {
  gulp.src('./cms/**/*.scss')
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(gulp.dest('./cms-build/css'));
});