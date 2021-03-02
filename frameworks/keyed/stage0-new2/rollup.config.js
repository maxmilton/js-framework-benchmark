'use strict';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import minifyliterals from 'rollup-plugin-minifyliterals';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'app.js',
  output: {
    file: 'dist/app.min.js',
    format: 'iife',
    name: 'app',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    minifyliterals(),
    terser()
  ],
}
