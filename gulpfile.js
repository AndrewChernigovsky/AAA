import { src, dest, watch, parallel } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import purgeCSS from 'gulp-purgecss';
import browserSync from 'browser-sync';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sass = gulpSass(dartSass);

const paths = {
  styles: {
    srcLib: './libs/libs.scss',
    src: './scss/style.scss',
    watch: './scss/**/*.scss',
    dest: './css/'
  },
  scripts: {
    src: './js/**/*.js',
    dest: './dist/js/'
  },
  assets: {
    dist: './dist/assets'
  },
  helpers: {
    dist: './dist/helpers'
  },
  functions: {
    dist: './dist/functions'
  },
  pages: {
    dist: './dist/pages'
  },
  layout: {
    dist: './dist/layout'
  },
  dist: './dist'
};

const sassTask = () => {
  return src(paths.styles.src)
    .pipe(sass({ silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
};

const sassTaskLibs = () => {
  return src(paths.styles.srcLib)
    .pipe(sass({ silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError))
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

function cleanDist(done) {
  fs.rmdir(path.join(__dirname, paths.dist), { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Папка "dist" успешно удалена!');
    }
  })(done());
}

const phpTaskBuild = () => {
  return src(['./index.php', './pages/**/*.php'])
    .pipe(dest(paths.dist))
};

const sassTaskBuild = () => {
  return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(purgeCSS({ content: ['src/scss/**/*.scss'] }))
    .pipe(dest(paths.styles.dest))

};

const sassTaskLibsBuild = () => {
  return src(paths.styles.srcLib)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoPrefixer())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(paths.styles.dest))
};


const dev = parallel(sassTask, sassTaskLibs, rollupTask, watchTask);
const build = parallel(cleanDist, phpTaskBuild, sassTaskBuild, sassTaskLibsBuild)

// export { sassTask, sassTaskLibs, rollupTask, phpTask, watchTask, dev, build, sassTaskBuild, sassTaskLibsBuild };
export default dev;
