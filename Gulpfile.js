'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var eslint= require('gulp-eslint');
var open = require('gulp-open');
var del = require('del');
var url = require('url');
var webpack = require('webpack');
var gwebpack = require('gulp-webpack');
var WebpackDevServer = require("webpack-dev-server");

var DevServer = require('./example/server/app');

var webpackConfig = {
    dev: require('./webpack.config.js')
};

var DEV_HOST = 'localhost';
var DEV_PORT = 3000;

var WPACK_DEV_HOST = DEV_HOST;
var WPACK_DEV_PORT = 8080;

var urlBuilder = function(host, port, path){
    return url.format({
        protocol: 'http',
        hostname: host,
        port: port,
        pathname: path
    });
};

gulp.task('open', function(){
    var url = urlBuilder(WPACK_DEV_HOST, WPACK_DEV_PORT, 'webpack-dev-server');
    gulp.src('./example/client/index.html').pipe(open('',{ url: url }));
});

gulp.task('clean', function(cb){
    del(['lib'], cb)
});

gulp.task('babel', ['clean'], function(){
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('lib'));
});

gulp.task('webpack-dev-server', function(){
    new DevServer().listen(DEV_PORT, DEV_HOST, function(err){
        if(err){ throw new gutil.PluginError('dev-server', err); }
        console.log('Dev Server Listening On Port', DEV_PORT)
    });
    var proxy = urlBuilder(DEV_HOST, DEV_PORT);
    new WebpackDevServer(webpack(webpackConfig.dev), {
        publicPath: '/assets/',
        contentBase: 'example/client',
        hot: true,
        stats: { colors: true },
        proxy: { '/api/v1/*': proxy }
    }).listen(WPACK_DEV_PORT, WPACK_DEV_HOST, function(err){
        if(err){ throw new gutil.PluginError('webpack-dev-server', err); }
    });
});

gulp.task('lint', function(){
    return gulp.src(['src/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format())
});

gulp.task('build', ['clean', 'babel']);
gulp.task('default', ['webpack-dev-server', 'open']);
