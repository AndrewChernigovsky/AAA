import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const PRODUCTION = process.env.PRODUCTION === 'true';

export default {
  input: './src/js/main.js',
  preserveEntrySignatures: 'strict',
  output: {
    dir: 'dist/js',
    chunkFileNames: '[name]-[hash].js',
    entryFileNames: '[name].js',
    format: 'esm',
    sourcemap: PRODUCTION ? false : true,
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
    }),
    PRODUCTION && terser()
  ].filter(Boolean),
  watch: {
    include: 'src/**'
  }
};
