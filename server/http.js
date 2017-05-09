var http = require('http');
var app = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('demo');
}).listen(9393, '127.0.0.1');
