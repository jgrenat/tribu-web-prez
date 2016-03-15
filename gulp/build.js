'use strict';

const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const fs = require('fs');
const path = require('path');
const moment = require('moment');

/** READ the Prez Dir and register tasks **/
const pathToPrez = path.join(__dirname, '../prez');
let fileInPrezDir = fs.readdirSync(pathToPrez);

let tasks = [];
let prezInfo = [];
for (let prez of fileInPrezDir) {
    if (!fs.lstatSync(pathToPrez + '/' + prez).isDirectory()) { continue; }

    const curTask = 'build:' + prez;
    tasks.push(curTask);
    prezInfo.push({
        link: prez + '.html',
        date: moment(prez.split('_')[0], 'YYYY-MM-DD').format('DD-MM-YYYY'),
        name: prez.split('_')[1]
    });

    gulp.task(curTask, () => {
        let data = {
            markdown: fs.readFileSync(pathToPrez + '/' + prez + '/index.md')
        };

        return gulp
            .src(path.join(__dirname, '../template/presentation.html'))
            .pipe(handlebars(data, {}))
            .pipe(rename(prez + '.html'))
            .pipe(gulp.dest('dist'));
    });
}

/** The task to build the list of prezentations **/
gulp.task('build:prezList', () => {
    let data = {
        presentations:  prezInfo
    };

    return gulp
        .src(path.join(__dirname, '../template/index.html'))
        .pipe(handlebars(data, {}))
        .pipe(gulp.dest('dist'));
});

/** copy reveal.js */
gulp.task('build:modules', () => {
    return gulp
        .src(path.join(__dirname, '../node_modules/reveal.js/**/*'), { "base" : "." })
        .pipe(gulp.dest('dist'));
});

/** The main task, it build all prez **/
gulp.task('build', ['clean'], (done) => {
    require('run-sequence')(tasks, 'build:prezList', 'build:modules', () => {
        done();
    });
});