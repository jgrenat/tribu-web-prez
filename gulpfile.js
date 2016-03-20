'use strict';

const gulp = require('gulp');
const wrench = require('wrench');

wrench
    .readdirSyncRecursive('./gulp')
    .filter((file) => { return (/\.(js)$/i).test(file); })
    .map((file) => { require('./gulp/' + file); });

gulp.task('default', ['lint', 'build']);