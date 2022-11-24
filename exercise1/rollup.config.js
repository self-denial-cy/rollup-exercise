const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const pkg = require('./package.json');


module.exports = [
    // browser-friendly UMD build
    {
        input: path.join(__dirname, './src/main.js'),
        output: {
            name: 'set',
            file: path.join(__dirname, pkg.browser),
            format: 'umd'
        },
        plugins: [
            resolve(), // so Rollup can find module from node_modules
            commonjs(), // so Rollup can convert module from node_modules to an ES module
            babel({
                exclude: ['node_modules/**'],
                babelHelpers: 'bundled',
                presets: [['@babel/preset-env', {
                    useBuiltIns: false,
                    modules: false
                }]],
                plugins: [['@babel/plugin-transform-runtime', {
                    corejs: 3,
                    helpers: false,
                    regenerator: false, // helpers 为 false 时，regenerator 参数无效
                    version: '^7.8.4'
                }]]
            })
        ]
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: path.join(__dirname, './src/main.js'),
        output: [
            {
                file: path.join(__dirname, pkg.main),
                format: 'cjs'
            },
            {
                file: path.join(__dirname, pkg.module),
                format: 'es'
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            babel({
                exclude: ['node_modules/**'],
                babelHelpers: 'runtime',
                presets: [['@babel/preset-env', {
                    useBuiltIns: false,
                    modules: false
                }]],
                plugins: [['@babel/plugin-transform-runtime', {
                    corejs: 3,
                    helpers: true,
                    regenerator: true,
                    version: '^7.8.4'
                }]]
            })
        ],
        external: id => id.includes('@babel/runtime-corejs3') || id.includes('the-answer')
    }
];
