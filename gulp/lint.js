'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', function () {
    return gulp
        .src([
            '../*.js',
            './template/**/*.js',
            './gulp/**/*.js'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});