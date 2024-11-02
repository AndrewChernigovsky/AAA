import { src, dest, watch, parallel } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';
import { exec } from 'child_process';

const sass = gulpSass(dartSass);

const paths = {
  styles: {
    srcLib: './libs/libs.scss',
    src: './scss/style.scss',
    watch: './scss/**/*.scss',
    dest: './css/'
  },
  scripts: {
    src: './js/**/*.js'
  }
};

const sassTask = () => {
  return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

const sassTaskLibs = () => {
  return src(paths.styles.srcLib)
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

const rollupTask = (done) => {
  exec('rollup -c', (err, stdout, stderr) => {
    if (err) {
      console.error(stderr);
      done(err);
      return;
    }
    console.log(stdout);
    browserSync.reload();
    done();
  });
};

const phpTask = () => {
  return src(['./index.php', './pages/**/*.php'])
    .pipe(browserSync.stream());
};

const watchTask = () => {
  browserSync.init({
    proxy: "http://aaa/",
    notify: false
  });
  watch(paths.styles.watch, sassTask);
  watch(paths.scripts.src, rollupTask);
  watch('./**/*.php', phpTask);
};

const build = parallel(sassTask, sassTaskLibs, rollupTask, watchTask);

export { sassTask, sassTaskLibs, rollupTask, phpTask, watchTask, build };
export default build;
