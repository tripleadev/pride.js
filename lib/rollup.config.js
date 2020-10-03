import ts from 'rollup-plugin-ts';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [ts(), postcss()],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: '../docs/src/lib/pride.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
