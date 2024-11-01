import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './js/main.js', // Entry points for your application
  output: {
    dir: 'dist/js', // Output directory
    format: 'esm', // Change to 'esm' for ES Module format
    sourcemap: true, // Generate sourcemaps
  },
  plugins: [
    resolve(), // Resolves node_modules
    commonjs(), // Converts CommonJS modules to ES6
    babel({
      exclude: 'node_modules/**', // Exclude node_modules from Babel processing
      babelHelpers: 'bundled', // Use bundled Babel helpers
      presets: ['@babel/preset-env'], // Use the preset for ES6+
    }),
    terser() // Minify the output
  ],
  watch: {
    include: 'src/**' // Watch files in the src directory
  }
};
