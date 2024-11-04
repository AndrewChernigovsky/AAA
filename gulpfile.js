import { src, dest, watch, parallel, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
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
    srcLib: './src/libs/libs.scss',
    src: './src/scss/style.scss',
    watch: './src/scss/**/*.scss',
    dest: './dist/css/'
  },
  scripts: {
    src: './src/js/**/*.js',
  },
  src: './src',
  dist: './dist'
};

const PRODUCTION = process.env.PRODUCTION === 'true';

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

const phpTask = (cb) => {

  (() => {
    return src(['./index.php'])
      .pipe(dest(paths.dist))
  })();

  (() => {
    return src(['./src/pages/**/*.php'])
      .pipe(dest(paths.dist + '/php/pages'))
  })();

  (() => {
    return src(['./src/helpers/**/*.php'])
      .pipe(dest(paths.dist + '/php/helpers'))
  })();

  (() => {
    return src(['./src/sections/**/*.php'])
      .pipe(dest(paths.dist + '/php/sections'))
  })();

  (() => {
    return src(['./src/layout/**/*.php'])
      .pipe(dest(paths.dist + '/php/layout'))
  })();

  (() => {
    return src(['./src/functions/**/*.php'])
      .pipe(dest(paths.dist + '/php/functions'))
  })();

  if (!PRODUCTION) {
    return src(['./index.php', './src/pages/**/*.php'])
      .pipe(browserSync.stream());
  }
  cb();
};

const watchTask = () => {
  browserSync.init({
    proxy: "http://aaa/dist",
    serveStatic: [{
      route: '/assets',
      dir: 'dist'
    }],
    notify: false,
  });
  if (!PRODUCTION) {
    watch(paths.styles.watch, sassTask);
    watch(paths.scripts.src, rollupTask);
    watch(['./src/**/*.php', './index.php'], phpTask);
  }
};

async function cleanDist(dirname) {
  const distPath = path.join(__dirname, dirname);

  try {
    await fs.access(distPath);
    await fs.rm(distPath, { recursive: true, force: true });
    console.log(`${distPath} успешно удалена!`);

  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.mkdir(distPath, { recursive: true });
      console.log(`${distPath} успешно создана!`);
    } else {
      console.error('Ошибка при удалении папки "dist":', err);
    }
  }
}

const sassTask = () => {
  let stream = src(paths.styles.src)
    .pipe(sass({ silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError));
  if (PRODUCTION) {
    stream = stream.pipe(autoPrefixer());
    stream = stream.pipe(cleanCSS({ level: 2 }));
  }
  return stream.pipe(dest(paths.styles.dest));
};

const sassTaskLibs = () => {
  let stream = src(paths.styles.srcLib)
    .pipe(sass({ silenceDeprecations: ['legacy-js-api'] }).on('error', sass.logError));
  if (PRODUCTION) {
    stream = stream.pipe(autoPrefixer());
    stream = stream.pipe(cleanCSS({ level: 2 }));
  }
  return stream.pipe(dest('./assets/libs'));
};

const copyStatics = () => {
  return src('./assets/**/*')
    .pipe(dest(paths.dist + '/assets'))
}

const statics = parallel(() => cleanDist('assets/libs'), sassTaskLibs, rollupTask);
const dev = series(() => cleanDist('dist'), phpTask, sassTask, sassTaskLibs, rollupTask, watchTask);
const build = series(() => cleanDist('dist'), copyStatics, phpTask, sassTask, sassTaskLibs, rollupTask, watchTask);

export { sassTask, sassTaskLibs, rollupTask, phpTask, watchTask, dev, build, statics };
export default dev;
