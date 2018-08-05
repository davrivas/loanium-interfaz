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
            baseDir: './public_html/'            
        }
    });

    gulp.watch('./public_html/*.html').on('change', browserSync.reload);
    gulp.watch('./public_html/resources/css/*.css').on('change', browserSync.reload);
    gulp.watch('./public_html/resources/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['browserSync']);
