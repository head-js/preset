import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';


export default [
  {
    input: 'src/index.js',

    external: [
    ],

    plugins: [
      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),
    ],

    output: [
      { file: 'dist/codemirror.js', format: 'iife', name: 'CodeMirror' },
    ],
  },
];
