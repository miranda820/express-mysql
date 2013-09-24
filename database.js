
var mysql = require('mysql'),
		config = require('./config/config');


var connection = mysql.createConnection(config.sql);

var connect = function () {

	connection.connect(function(err, db){
		if(!err){
					console.log("You are connected to the database.");

		}
		else{
					throw err;
		}
	});
}



var end = function () {
	connection.end(function(err){
		if(!err){
					console.log("Mysql connection is terminated.")
		}
		else{
					throw err;
		}
	});
}


module.exports = {
	connect: connect,
	connection: connection,
	end: end,
}

//console.log('this is module', module);
