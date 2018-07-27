/*
var promise = new Promise(function(resolve, reject) {
    resolve(1);
});
promise.then(function(val) {
    console.log(val);
    return val + 2;
}).then(function(val) {
    console.log(val);
});
*/

// let p = new Promise(function(resolve, reject) {
//     console.log('create a promise');
//     resolve('success');
// });

// console.log('after a new promise');

// p.then(function(value) {
//     console.log(value + ' then function');
// });
/*
// 三种状态

var p1 = new Promise(function(resolve, reject) {
    resolve(1);
});

var p2 = new Promise(function(resolve, reject) {    
    setTimeout(function() {
        resolve(2);
    }, 500);
});

var p3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(3);
    }, 500);
});

console.log(p1);
console.log(p2);
console.log(p3);

setTimeout(function() {
    console.log(p2);
}, 1000);

setTimeout(function() {
    console.log(p3);
}, 1000);

p1.then(function(value) {
    console.log(value);
});

p2.then(function(value) {
    console.log(value);
});

p3.catch(function(err) {
    console.log(err);
});
*/

//状态不可逆
/*
let p = new Promise(function(resolve, reject) {
    resolve('success');
    resolve('success2');
    reject('reject');
});
p.then(function(value) {
    console.log(value);
});
*/

//链式调用

/*
let p = new Promise(function(resolve, reject) {
    resolve('1');
});

p.then(function(value) {
    console.log(value);
    return value * 2;
}).then(function(value) {
    console.log(value);
}).then(function(value) {
    console.log(value);
    return Promise.resolve('resolve');
}).then(function(value) {
    console.log(value);
    return Promise.reject('reject');
}).then(function(value) {
    console.log('resolve' + value);
}, function(err) {
    console.log('reject' + err);
});
*/


//Promise异常
/*
let p1 = new Promise(function(resolve, reject) {
    nibaba.lashi();
    resolve(1);
});
p1.then(
    function(value) {
        console.log('p1 then value:' + value);
    },
    function(err) {
        console.log('p1 then err:' + err);
    }
).then(
    function(value) {
        console.log('p1 then then value: ' + value);
    },
    function(err) {
        console.log('p1 then then err: ' + err);
    }
);

var p2 = new Promise(function(resolve, reject) {
    resolve(2);
});
p2.then(
    function(value) {
        console.log('p2 then value: ' + value);
        nibaba.lashi();
    },
    function(err) {
        console.log('p2 then err: ' + err);
    }
).then(
    function(value) {
        console.log('p2 then then value: ' + value)
    },
    function(err) {
        console.log('p2 then then err: ' + err);
        return 1;
    }
).then(
    function(value) {
        console.log('p2 then then then value: ' + value);
    },
    function(err) {
        console.log('p2 then then then err: ' + err);
    }
);
*/

//resolve
/*
var p1 = Promise.resolve(1);
var p2 = Promise.resolve(p1);
var p3 = new Promise(function(resolve, reject) {
    resolve(1);
});
var p4 = new Promise(function(resolve, reject) {
    resolve(p1);
});

console.log(p1 === p2); 
console.log(p1 === p3);
console.log(p1 === p4);
console.log(p3 === p4);

p4.then(function(value){
  console.log('p4=' + value);
});

p2.then(function(value){
  console.log('p2=' + value);
})

p1.then(function(value){
  console.log('p1=' + value);
})
*/
