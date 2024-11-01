import { src, dest, watch, parallel } from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

const sassTask = () => {
  return src('./scss/style.scss')
    .pipe(sass())
    .pipe(dest('./css/'))
    .pipe(browserSync.stream());
};

const phpTask = () => {
  return src(['./index.php', './pages/**/*.php'])
    .pipe(browserSync.stream());
};

const watchTask = () => {
  browserSync.init({
    proxy: "http://aaa/", // Замените "aaa" на ваш локальный адрес
    notify: false
  });
  watch('./scss/**/*.scss', sassTask);
  watch('./**/*.php', phpTask);
};

const build = parallel(sassTask, watchTask);

export { sassTask, watchTask, build };
export default build;