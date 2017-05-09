const express = require('express');
const http = require('http');
const app = express();
app.use((req, res, next) => {
	console.log('in comes a' + res.method + 'to' + req.url);
	next();
})
app.use((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/palin'});
	res.end('demo\n');
})
http.createServer(app).listen(9090)