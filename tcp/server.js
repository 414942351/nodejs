var net = require('net');
var server = net.createServer(function(socket) {
	socket.on('data', function(data) {
		socket.write('hey man');
	})
	socket.on('end', function() {
		console.log('fuck down');
	})
	socket.write('welcome nodejs');
})
server.listen(9393, function() {
	console.log('the server is listening port 9393');
})