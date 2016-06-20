/**
 * Created by atul on 4/10/2016.
 */
var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){
    browserify('./public/scripts/movieContainer.js')
        .transform('reactify')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('dist/js')) //we don't need to create this folder gulp will auto create this
});

//Then we create copy task
gulp.task('copy',function(){
    gulp.src('./public/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('./public/css/*.*')
        .pipe(gulp.dest('dist/css'));
    gulp.src('./public/js/*.*')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('./public/**/*.*',['browserify','copy']);
});
