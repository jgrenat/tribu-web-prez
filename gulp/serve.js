'use strict';

const gulp = require('gulp');
const path = require('path');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: path.join(__dirname, '../dist')
        },
        startPath: 'index.html',
        reloadOnRestart: true
    });

    gulp.watch(path.join(__dirname, '../prez/**/*'), ['serve:reload']);
    gulp.watch(path.join(__dirname, '../src/*'), ['serve:reload']);
});

gulp.task('serve:reload', ['build'], browserSync.reload);