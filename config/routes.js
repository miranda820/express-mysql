module.exports = function(app, connection){

	console.log('connection', connection);
	//home route
	var home = require('../app/controllers/home');

	app.get('/', function (req,res) {

		//pass connection to database to controller
		home.index (req,res,connection)
	});

};
