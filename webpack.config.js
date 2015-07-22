'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [ './example/app.js' ],
    output: {
        path: __dirname,
        filename: 'main.js',
        publicPath: '/assets/'
    },
    cache: true,
    debug: false,
    devtool: false,
    stats: {
        colors: true,
        reasons: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: [/node_modules/,/dist/],
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
