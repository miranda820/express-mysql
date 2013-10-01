var express = require('express'),
  	config = require('./config/config');

var pool = require('./database'); //will need to export pool from database.js



var app = express();

require('./config/express')(app, config);

pool.creatConnection(config, function(connection) {
	//pass connection to model through route
	require('./config/routes')(app, connection); //TODO: may need to pass pool here, and pass it to controllers, then model inclusion
})





app.listen(config.port);

