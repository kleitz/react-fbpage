'use strict';

var http = require('http');
var url = require('url');
var httpProxy = require('http-proxy');
var nconf = require('nconf');

nconf.env().file(__dirname + '/config.json');

module.exports = function(){
    var proxy = httpProxy.createProxyServer({
        secure:false,
        changeOrigin: true,
        autoRewrite: true
    });

    //Facebook Access Token From Environment
    var envFbToken = nconf.get('facebook:env:token');
    var token = nconf.get(envFbToken);

    //Api Path
    var apiPrefix = nconf.get('dev:api:prefix');

    //[Before Send] Replace Dev Path With Facebook Graph + Add Access Token
    proxy.on('proxyReq', function(proxyReq, req, res, options){
        var urlObject = url.parse(proxyReq.path, true);
        urlObject.query.access_token = token;
        var proxyPath = urlObject.pathname.replace(apiPrefix, '');
        var proxyUrl = url.format({
            query: urlObject.query,
            pathname: proxyPath
        });
        proxyReq.path = proxyUrl;
    });
    return http.createServer(function(req, res){
        proxy.web(req, res, {
            target: nconf.get('facebook:api:url')
        });
    });
};
