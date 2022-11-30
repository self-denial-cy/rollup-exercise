const path = require('path');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const {terser} = require('rollup-plugin-terser');
const clear = require('rollup-plugin-clear');
const progress = require('rollup-plugin-progress');
const sizes = require('rollup-plugin-sizes');
const filesize = require('rollup-plugin-filesize');
const vue = require('rollup-plugin-vue');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

module.exports = [
    {
        input: path.join(__dirname, './src/browser-entry.js'),
        output: {
            file: path.join(__dirname, pkg.browser),
            format: 'iife',
            sourcemap: !isProd
        },
        plugins: [
            resolve(),
            commonjs(),
            isProd ? terser() : null,
            clear({
                targets: ['dist']
            }),
            progress(),
            sizes(),
            filesize(),
            vue({
                css: false
            }),
            postcss({
                extract: true,
                minimize: isProd,
                plugins: [
                    autoprefixer()
                ]
            })
        ]
    },
    {
        input: path.join(__dirname, './src/module-entry.js'),
        output: {
            file: path.join(__dirname, pkg.module),
            format: 'es',
            sourcemap: !isProd
        },
        plugins: [
            resolve(),
            commonjs(),
            isProd ? terser() : null,
            clear({
                targets: ['dist']
            }),
            progress(),
            sizes(),
            filesize(),
            vue({
                css: false
            }),
            postcss({
                extract: true,
                minimize: isProd,
                plugins: [
                    autoprefixer()
                ]
            })
        ],
        external: id => id.includes('the-answer')
    }
];
