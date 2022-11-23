const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
    input: path.join(__dirname, './src/main.js'),
    output: {
        format: 'es',
        name: 'main',
        file: path.join(__dirname, './dist/bundle.js')
    },
    plugins: [
        resolve(),
        commonjs(),
        babel()
    ]
};
