var execSync = require('child_process').execSync;
var SEPARATOR = process.platForm === 'win32' ? ';' : ':';
var env = Onject.assign({}, process.env);
env.PATH = path.resolve('./node_modules/.bin') + SEPARATOR + env.PATH;












// var exec = require('child_process').exec;

// exec('node -v', function(error, stdout, stderr) {
// 	 console.log('stdout: ' + stdout);
// 	 console.log('stderr: ' + stderr);
// 	 if(error !== null) {
// 	 	console.log('exec error' + error);
// 	 }
// });






// var child = exec('ls -1');
// child.stdout.on('data', function(data) {
// 	console.log('stdout: ' + data);
// });
// child.stderr.on('data', function(data) {
// 	console.log('stdout: ' + data);
// });
// child.on('close', function(code) {
// 	console.log('closing code: ' + code);
// })









// var ls = exec('ls -l', function(error, stdout, stderr) {
// 	if(error) {
// 		console.log(error.stack);
// 		console.log('Error code:' + error.code);
// 	}
// 	console.log('Child Process STDOUT:' + stdout);
// });