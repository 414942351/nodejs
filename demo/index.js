var fs = require('fs');
fs.readFile('./fuck.txt', function(err, data) {
	if(err !== null) {
		throw err;
	}
	console.log(data.toString());
})


// var m = require('./foo');
// m.print('this is user define module');