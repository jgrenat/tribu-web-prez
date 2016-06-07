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
    
    //require additional informations from js/json files
    let additionnalInfo = {};
    try {
        additionnalInfo = require(pathToPrez + '/' + prez + '/info');
    } catch (e) {
        console.info('You can customize descriptions and other with a info.json file for ', prez);
    }

    const curTask = 'build:' + prez;
    let curData = {
        link: prez.toLowerCase() + '.html',
        date: moment(prez.split('_')[0], 'YYYY-MM-DD').format('DD-MM-YYYY'),
        name: additionnalInfo.name || prez.split('_')[1].split('-').join(' '),
        title: additionnalInfo.title || prez.split('_')[1].split('-').join(' '),
        md: {
            index: prez + '/index.md'
        }
    };

    tasks.push(curTask);
    prezInfo.push(curData);

    gulp.task(curTask, () => {
        return gulp
            .src(path.join(__dirname, '../src/presentation.html'))
            .pipe(handlebars(curData, {}))
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
        .src(path.join(__dirname, '../src/index.html'))
        .pipe(handlebars(data, {}))
        .pipe(gulp.dest('dist'));
});

/** Copy markdown and images **/
gulp.task('build:prezData', () => {
    return gulp
        .src(path.join(__dirname, '../prez/**/*'), {base: 'prez'})
        .pipe(gulp.dest('dist'));
});

gulp.task('build:other', () => {
    return gulp
        .src([path.join(__dirname, '../src/*.js'), path.join(__dirname, '../src/*.css')])
        .pipe(gulp.dest('dist'));
});

/** copy reveal.js */
gulp.task('build:modules', () => {
    return gulp
        .src(path.join(__dirname, '../node_modules/reveal.js/**/*'), { base: '.' })
        .pipe(gulp.dest('dist'));
});

/** The main task, it build all prez **/
gulp.task('build', ['clean'], (done) => {
    require('run-sequence')(tasks, 'build:other', 'build:prezList', 'build:prezData', 'build:modules', () => {
        done();
    });
});
