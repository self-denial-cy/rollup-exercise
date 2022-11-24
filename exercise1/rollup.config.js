const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: path.join(__dirname, './src/main.js'),
    output: {
        format: 'es',
        file: path.join(__dirname, './dist/bundle.js')
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
