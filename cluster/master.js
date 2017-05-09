const cluster = require('cluster');
// const os = require('os');
// const http = require('http');
const cluster = require('cluster');
console.log('started master with ' + process.pid);

cluster.fork();
process.on('SIGNUP', function() {
	console.log('Reloading');
	var new_worker = cluster.fork();
	new_worker.once('listening', function() {
		for(var id in cluster.workers) {
			if(id === new_worker.id.toString()) {
				continue;
			}
			cluster.workers[id].kill('SIGTERM');
		}
	})
})




// if(cluster.isMaster) {
// 	var worker = cluster.fork();
// 	worker.send('hi there');
// } else if(cluster.isWorker) {
// 	process.on('message', function(msg) {
// 		process.send(msg);
// 	})
// }


// if(cluster.isMaster) {
// 	var numWorkers = require('os').cpus().length;
// 	console.log('Master cluster setting up ' + numWorkers + ' workers');
// 	for(var i = 0; i < numWorkers; i++) {
// 		cluster.fork();
// 	}
// 	cluster.on('online', function(worker) {
// 		console.log('Worker' + worker.process.pid + ' is online');
// 	})
// 	cluster.on('exit', function(worker, code, signal) {
// 		console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
// 		console.log('Staring a new worker');
// 		cluster.fork();
// 	})
// }
// if(cluster.isMaster) {
// 	for(let i = 0, n = os.cpus().length; i < n; i += 1) {
// 		cluster.fork();
// 	}
// } else {
// 	http.createServer((req, res) => {
// 		res.writeHead(200);
// 		res.end('hello world\n');
// 	}).listen(8000);
// }