module.exports = function(app) {
	app.get('/', (req, res) => {
		res.send('what a fuck');
	});
	app.get('/customer', (req, res) => {
		res.send('customer page');
	})
}