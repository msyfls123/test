/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */
// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    base64 = require('gulp-base64'),
    del = require('del');

var base64opt={
    baseDir: "src/css",
    extensions: ['png'],
    maxImageSize: 20 * 1024, // bytes
    debug: true
}



// Styles
gulp.task('styles', function() {
  return gulp.src('src/css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('>1%'))
    .pipe(base64(base64opt))
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});
// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
// Images
gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});
// Clean
gulp.task('clean', function(cb) {
    del(['dist/css', 'dist/js', 'dist/img'], cb)
});
// Watch
gulp.task('default',function() {
  // gulp.start('clean');
  // Watch .scss files
  gulp.watch('src/css/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
  // Watch image files
  gulp.watch('src/img/*', ['images']);
  // Create LiveReload server
  // livereload.listen();
  // // Watch any files in dist/, reload on change
  // gulp.watch(['dist/**']).on('change', livereload.changed);
});
