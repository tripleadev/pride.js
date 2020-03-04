import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

import pkg from './package.json';

export default [
  {
    input: 'src/index.tsx',
    external: Object.keys(pkg.peerDependencies || {}),
    plugins: [
      postcss(),
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
      {
        file: 'docs/src/pride.js/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
