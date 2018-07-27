/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './'            
        }
    });

    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./resources/css/*.css').on('change', browserSync.reload);
    gulp.watch('./resources/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync']);
