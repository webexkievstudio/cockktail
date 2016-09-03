"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    csscomb = require('gulp-csscomb'),
    paths = {
        sass: {
            src: './scss/**/*.scss'
        },
        css: './css'
    };

//Sass
gulp.task('sass', function () {
    gulp.src(paths.sass.src)
        .pipe(watch(paths.sass.src))
        .pipe(plumber())
        .pipe(sass({
            includePaths: require('node-refills').includePaths
        }))
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.css));
});

// Watch
gulp.task('watch', function () {
    gulp.watch(paths.sass.src, ['sass']);
    gulp.src('./css/style.css').pipe(gulp.dest('./'));
});

// Default
gulp.task('default', ['sass', 'watch']);
