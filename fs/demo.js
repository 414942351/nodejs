const fs = require('fs');
fs.watch('./temp', {
	encoding: 'buffer'
},(eventType, filename)=> {
	if(filename) {
		console.log(filename);
	}
});





// fs.unlink('./hello.txt', (err)=>{
// 	if(err) {
// 		throw err;
// 	}
// 	console.log('success');
// });