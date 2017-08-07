// Node.js 中 Eventemitter 的 emit 是同步的. 
/*当 EventEmitter 对象触发一个事件时，
所有绑定在该事件上的函数都被同步地调用。 
监听器的返回值会被丢弃*/
const EventEmitter = require('events');
// let emitter = new EventEmitter();
// // console.log(this)
// emitter.on('myEvent',() => {
// 	console.log('hi 1',this);
// });

// emitter.on('myEvent',() => {
// 	console.log('hi 2');
// });
// emitter.emit('myEvent');
/*监听器函数可以使用 setImmediate() 或 process.nextTick() 方法切换到异步操作模式*/
// const myEmitter = new EventEmitter();
// myEmitter.on('event', (a, b) => {
//   // setImmediate(() => {
//     // console.log('这个是异步发生的');
//     process.nextTick(()=> {
//    		console.log('这个是异步发生的');
//     });
//   // });
// });
// myEmitter.on('event', (a, b) => {
//     console.log('hi 1');
// });
// myEmitter.emit('event', 'a', 'b');

/*为了防止 Node.js 进程崩溃，可以在 process 对象的 uncaughtException 事件上注册监听器*/
// process.on('uncaughtException', (err) => {
//   console.error('有错误');
// });

// myEmitter.emit('error', new Error('whoops!'));
// // 打印: 有错误

// //应该始终为 'error' 事件注册监听器。
// myEmitter.on('error', (err) => {
//   console.error('有错误');
// });
// myEmitter.emit('error', new Error('whoops!'));

//死循环，栈溢出
// let emitter = new EventEmitter();

// emitter.on('myEvent', () => {
//   console.log('hi');
//   emitter.emit('myEvent');
// });

// emitter.emit('myEvent');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
});

emitter.emit('myEvent');















