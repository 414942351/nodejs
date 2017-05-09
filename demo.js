






// var foo = function() {
// 	var bar = function() {
// 		var local = 'jububianliang';
// 		return function() {
// 			return local
// 		};
// 	};
// 	var baz = bar();
// 	console.log(baz());
// }()





// var foo = function() {
// 	var local = 'jubu bianliang';
// 	(function() {
// 		console.log(local);
// 	}())
// }()



// var foo = function() {
// 	var local = 'local var';
// 	var bar = function() {
// 		var local = 'another var';
// 		var baz = function() {
// 			console.log(local);
// 		}
// 		baz();
// 	}
// 	bar();
// }
// foo();






// var Wind = require('wind');
// var Task = Wind.Async.Task;
// var readFileAsync = function(file, encoding) {
// 	return Task.create(function(t) {
// 		fs.readFile(file, encoding, function(err, file) {
// 			if(err) {
// 				t.complete('failure', err);
// 			} else {
// 				t.complete('success', file);
// 			}
// 		})
// 	})
// }




// const fs = require('fs');
// fs.unlink('tmp/hello', (err) => {
// 	if(err) throw err;
// 	console.log('successfully deleted /tmp/hello');
// })












// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }



// var path = require('path');
// path.hostname()



// var EventEmitter = require('events');
// var util = require('util');

// function MyEmitter() {
// 	EventEmitter.call(this);
// }
// util.inherits(MyEmitter, EventEmitter);
// var myEmitter = new MyEmitter();
// myEmitter.on('event', function() {
// 	console.log('an event occurred!');
// })
// myEmitter.emit('event');





// var count = 0;
// var results = {};
// var done = function(key, value) {
// 	results[key] = value;
// 	count ++;
// 	if(count === 3) {
// 		render(results);
// 	}
// }
// var events = require('events');

// var util = require('util')
// function Stream() { events.EventEmitter.call(this);
// }
// util.inherits(Stream, events.EventEmitter);









// var process = require('process');

// var async = function(callback) {
// 	process.nextTick(callback);
// }

// function asyncCb() {
// 	console.log('async');
// }

// async(asyncCb)