const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
	const serve = (path, type)=> {
		res.writeHead(200, {'Content-Type': type});
		fs.createReadStream(path).pipe(res);
	};
	if(req.methos == 'GET' 
		&& req.url.substr(0, 7) == '/images'
		&& req.url.substr(-4) == '.jpg') {

	}else if (req.methos == 'GET' && req.url == '/') {
		serve(__dirname + '/index.html', 'text/html');
	}else {
		res.writeHead(404);
		res.end('Not Found');
	};
	fs.stat(__dirname + req.url, (err, stat)=> {
		if(err || !stat.isFile()) {
			res.writeHead(404);
			res.end('Not Found');
			return;
		};
		serve(__dirname + req.url, 'application/jpg');
	});
});

server.listen(8888);
console.log('The server is running on port 8888');

