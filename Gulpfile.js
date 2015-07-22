'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var eslint= require('gulp-eslint');
var open = require('gulp-open');
var del = require('del');
var webpack = require('webpack');
var gwebpack = require('gulp-webpack');
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = {
    dev: require('./webpack.config.js')
};

var DEV_HOST = 'localhost';
var DEV_PORT = 8080;

gulp.task('open', function(){
    var url = 'http://' + DEV_HOST + ':' + DEV_PORT + 'webpack-dev-server/';
    gulp.src('./example/index.html').pipe(open('',{ url: url }));
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
    new WebpackDevServer(webpack(webpackConfig.dev), {
        publicPath: '/assets/',
        contentBase: 'example',
        stats: { colors: true }
    }).listen(DEV_PORT, DEV_HOST, function(err){
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
