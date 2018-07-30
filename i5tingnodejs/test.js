const EventEmitter = require('events');
const util = require('util');

let MyEmitter = function() {

}

util.inherits(MyEmitter, EventEmitter);

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b)=> {
    console.log(a, b, this);
});

myEmitter.emit('event', 'a', 'b');

