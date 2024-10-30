const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const sassTask = () => {
  return gulp.src('./scss/style.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());
};

const phpTask = () => {
  return gulp.src('./*.php')
    .pipe(browserSync.stream());
};

const watchTask = () => {
  browserSync.init({
    proxy: "http://aaa/",
    notify: false,
  });
  gulp.watch('./scss/**/*.scss', sassTask);
  gulp.watch('./*.php', phpTask);
};

const defaultTask = gulp.parallel(sassTask, watchTask);

exports.sass = sassTask;
exports.watch = watchTask;
exports.default = defaultTask;