import { src, dest, watch, parallel } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import purgeCSS from 'gulp-purgecss';
import browserSync from 'browser-sync';
import { exec } from 'child_process';
import fs from 'fs/promises';
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
    dest: './dist/css/'
  },
  src: './src',
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

const watchTaskBuild = () => {
  browserSync.init({
    proxy: "http://aaa/dist",
    notify: false
  });
};

async function cleanDist() {
  const distPath = path.join(__dirname, paths.dist);

  try {
    const access = await fs.access(distPath);
    if (access) {
      await fs.rm(distPath, { recursive: true, force: true });
      console.log('Папка "dist" успешно удалена!');
    } else {
      await fs.mkdir(distPath, { recursive: true });
    }
  } catch (err) {
    console.error('Ошибка при удалении папки "dist":', err);
  }
}

const phpTaskBuild = (cb) => {
  (() => {
    return src(['./index.php'])
      .pipe(dest(paths.dist))
  })();

  (() => {
    return src(['./pages/**/*.php'])
      .pipe(dest(paths.dist + '/pages'))
  })();

  (() => {
    return src(['./helpers/**/*.php'])
      .pipe(dest(paths.dist + '/php/helpers'))
  })();

  (() => {
    return src(['./sections/**/*.php'])
      .pipe(dest(paths.dist + '/php/sections'))
  })();

  (() => {
    return src(['./layout/**/*.php'])
      .pipe(dest(paths.dist + '/php/layout'))
  })();

  (() => {
    return src(['./functions/**/*.php'])
      .pipe(dest(paths.dist + '/php/functions'))
  })();

  cb();
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

const cleanAndBuild = async () => {
  await cleanDist();
  return parallel(phpTaskBuild, watchTaskBuild)();
};

const dev = parallel(sassTask, sassTaskLibs, rollupTask, watchTask);
const build = cleanAndBuild;

export { sassTask, sassTaskLibs, rollupTask, phpTask, watchTask, dev, build, sassTaskBuild, sassTaskLibsBuild };
export default dev;
