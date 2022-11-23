const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: path.join(__dirname, './src/main.js'),
    output: {
        format: 'umd',
        name: 'set',
        file: path.join(__dirname, './dist/bundle.js'),
        globals: {
            '@babel/runtime-corejs3/core-js-stable/set': '_Set',
            '@babel/runtime-corejs3/core-js-stable/promise': '_Promise',
            '@babel/runtime-corejs3/core-js-stable/instance/includes': '_includesInstanceProperty'
        }
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'runtime',
            presets: [[
                '@babel/preset-env',
                {
                    useBuiltIns: false
                }
            ]],
            plugins: [['@babel/plugin-transform-runtime', {
                corejs: 3,
                helpers: true,
                regenerator: true,
                version: '^7.8.4'
            }]]
        })
    ],
    external: id => id.includes('@babel/runtime-corejs3')
};
