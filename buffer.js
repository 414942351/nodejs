console.log(process.env.NODE_ENV);





// let arr = [];
// while(true) {
// 	arr.push(new Buffer(1000));
// }




// var http = require('http');
// var helloworld = '';
// for(var i = 0; i < 1024*10; i++) {
// 	helloworld += 'a';
// }
// helloworld = new Buffer(helloworld);


// http.createServer(function(req, res) {
// 	res.writeHead(200);
// 	res.end(helloworld);
// }).listen(8080);








// var fs = require('fs');
// var rs = fs.createReadStream('test.md');
// var data = '';
// rs.on('data', function(chunk) {
// 	data += chunk;
// });
// rs.on('end', function() {
// 	console.log(data);
// })


// var iceonv = require('iconv-lite')
// console.log(Buffer.isEncoding('fasfdsa'));

// new Buffer(str, 'encoding');


// var pool;
// function allPool() {
// 	pool = new SlowBuffer(Buffer.poolSize);
// 	pool.used = 0;
// }



// var str = 'fdjskla'
// var buf = new Buffer(str, 'utf-8');
// console.log(buf);