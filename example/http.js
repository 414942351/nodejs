var http = require('http');
var opts = {
	host: 'fhdsjalfas.net',
	port: 80,
	path: '/'
}

var req = http.get(opts, function(res) {
	console.log('this will never get called');
})
req.on('error', function(e) {
	console.log('got that pesky error trapped');
})