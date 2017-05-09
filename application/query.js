// var str = 'foo=bar&baz=val';
var url = require('url');
var querystring = require('querystring');
var query = querystring.parse(url.parse(req.url).query);