var util = require('util');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('beep', function() {
	console.log('beep');
});
emitter.on('beep', function() {
	throw Error('opps!');
});
emitter.on('beep', function() {
	console.log('beep again');
})
console.log('before emit');

try {
	emitter.emit('beep');
} catch(err) {
	console.error('caught while emitting', err.message);
}
console.log('after emit');







// function onlyOnce() {
// 	console.log(emitter.listeners('firstConnection'));
// 	emitter.removeListener('firstConnection', onlyOnce);
// 	console.log(emitter.listeners('firstConnection'));
// }
// emitter.on('firstConnection', onlyOnce);
// emitter.emit('firstConnection');
// emitter.emit('firstConnection');




// emitter.on('message', console.log);
// setInterval(function() {
// 	emitter.emit('message', 'foo bar');
// }, 300);
// setTimeout(function() {
// 	emitter.removeListener('message', console.log);
// }, 1000);



// myEmitter.once('message', function(msg) {
// 	console.log('message:' + msg);
// });
// myEmitter.emit('message', 'first');
// myEmitter.emit('message', 'second');
// myEmitter.emit('message', 'third');








// var connection = function(id) {
// 	console.log('client id:' + id);
// }

// myEmitter.on('connection', connection);
// myEmitter.emit('connection', 2);





// var Radio = function(station) {
// 	var self = this;
// 	setTimeout(function() {
// 		self.emit('open', station);
// 	}, 0);
// 	setTimeout(function() {
// 		self.emit('close', station);
// 	}, 5000);
// 	this.on('newListener', function(listener) {	
// 		console.log('Event Listener' + listener);
// 	});
// }
// util.inherits(Radio, EventEmitter);
// module.exports = Radio;







// function Dog(name) {
// 	this.name = name;
// }
// Dog.prototype.__proto__ = EventEmitter.prototype;

// var simon = new Dog('simon');

// simon.on('bark', function() {
// 	console.log(this.name + 'barked');
// });

// setInterval(function() {
// 	simon.emit('bark')
// }, 500);








// var emitter = new EventEmitter();
// emitter.on('someEvent', function() {
// 	console.log('occurred event');
// })

// function f() {
// 	console.log('start');
// 	emitter.emit('someEvent');
// 	console.log('end');
// }
// f();












// const EventEmitter = require('events');
// const util = require('util');
// console.log(__filename);
// console.log(__dirname);





// function MyEmitter() {
// 	EventEmitter.call(this);
// }
// util.inherits(MyEmitter, EventEmitter);
// const myEmitter = new MyEmitter()
// myEmitter.on('event', () => {
// 	console.log('an event occurred!');
// });
// myEmitter.emit('event');