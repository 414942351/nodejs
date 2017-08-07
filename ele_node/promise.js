// let doSth = new Promise((resolve, reject) => {
// 	console.log('hello');
// 	resolve();
// });
// setTimeout(()=> {
// 	doSth.then(() => {
// 		console.log('over');

// 	});
// }, 10000);
/*
	setTimeout定时结束后放到任务队列中，promise中的代码同步执行，输出2，3
	then放到tick的最后执行，输出5，then中的方法放到最后
	23541
	 Promise 的 4 在 1 前面输出是因为 Promise.then()里面的回调属于 microtask, 
	 会在当前 Event Loop 的最后执行, 而 SetTimeout 内的回调属于 macrotask, 
	 会在下一个 Event Loop 中执行
*/
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function executor(resolve) {
  console.log(2);
  for( var i=0 ; i<10000 ; i++ ) {
    i == 9999 && resolve();
  }
  console.log(3);
}).then(function() {
  console.log(4);
});
console.log(5);