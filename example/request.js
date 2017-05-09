var request = require('request');
request('http://www.smzdm.com/youhui/', (err, req) => {
	if(!err) {
		console.log(Object.keys(req));
	}
})
