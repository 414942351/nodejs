//js类型判断
// console.log([1] == [1]) //false

//爆掉v8内存, JavaScript heap out of memory
// let arr = [];
// while(true) {
// 	arr.push(1);
// }
//不会爆掉
// let arr = [];
// while(true) {
//   arr.push();
// }
//不会爆掉
// let arr = [];
// while(true) {
//   arr.push(new Buffer(1000));
// }


//内存泄露？
// var theThing = null;
// var replaceThing = function() {
// 	var originalThing = theThing;
// 	var unused = function() {
// 		if(originalThing) {
// 			console.log('hi');
// 		}
// 		theThing = {
// 			longStr: new Array(1000000).join('*'),
// 			someMethod: function() {
// 				console.log(someMessage);
// 			}
// 		}
// 	}
// }

// setInterval(replaceThing, 1000);
/*
JavaScript 只有一种数字类型 Number，
而且在Javascript中所有的数字都是以IEEE-754标准格式表示的。
浮点数的精度问题不是JavaScript特有的，因为有些小数以二进制表示位数是无穷的。
*/
// console.log(0.1+0.2) //0.30000000000000004
// console.log(typeof (0.1 + 0.2).toFixed(1)) //String


















