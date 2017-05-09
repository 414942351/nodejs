var utils = require('util');
var EventEmitter = require('events').EventEmitter;

var Server = function() {
	console.log('init');
}

utils.inherits(Server, EventEmitter);

var s = new Server();
s.on('abc', function(data) {
	console.log(data);
})
s.emit('abc', 1)















// var Radio = require('./radio.js');
// var station = {
// 	freq: '80.16',
// 	name: 'rock n roll radio'
// };
// var radio = new Radio(station);
// radio.on('open', function(station) {
// 	console.log('"%s" FM %s 打开', station.name, station.freq);
// 	console.log('♬ ♫♬');
// });
// radio.on('close', function(station) {
// 	console.log('"%s" FM %s 关闭', station.name, station.freq);
// });