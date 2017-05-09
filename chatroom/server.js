const net = require('net');
const chatServer = net.createServer();
let clientList = [];
chatServer.on('connection', function(client) {
	client.name = client.remoteAddress + ':' + client.remotePort;
	client.write('Hi ' + client.name + '!\n');
	client.push(client);
	client.on('data', function(data) {
		broadcast(data, client);
	});
});
console.log('The server is running on port 9300');

function broadcast(message, client) {
	for(let i = 0; i < clientList.length; i++) {
		if(client !== clientList[i]) {
			clientList[i].write(client.name + ' says ' + message);
		}
	}
}

chatServer.listen(9300);

















