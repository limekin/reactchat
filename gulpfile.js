var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');

gulp.task('default', function() {

});

/*
 * Babel for the react.
 */
gulp.task('babel', function() {
    gulp.src('js/src/*')
        .pipe(babel( {
            "presets": ["env", "react"]
        }))
        .pipe(gulp.dest('js/dist'));
});

/*
 * Browseify task.
 */
gulp.task('browserify', function() {
    gulp.src('js/dist/index.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(gulp.dest('js'))
        .pipe(livereload());
});

/*
 * LESS TASK.
 */
gulp.task('less', function() {
    gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

/*
 * ONLY RELOAD.
 */
gulp.task('reload', function() {
    gulp.src('index.php')
        .pipe(livereload());
});

/*
 * GENERAL WATCHES TASK.
 */
gulp.task('watch', function() {
    livereload.listen({port: 5000});

    gulp.watch('less/*.less', ['less']);
    gulp.watch('js/src/*', ['babel', 'browserify']);
    gulp.watch('index.php', ['reload']);
});
