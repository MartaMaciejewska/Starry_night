var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps =require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:'compact',
            errLogToConsole: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', ['sass']);
});