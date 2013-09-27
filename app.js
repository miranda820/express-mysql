var express = require('express'),
  fs = require('fs'),
  config = require('./config/config');

var pool = require('database')(config); //will need to export pool from database.js

//TODO: this may not be needed, since models are included from controllers
var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file)(pool);
  }
});

var app = express();


require('./config/express')(app, config);
require('./config/routes')(app); //TODO: may need to pass pool here, and pass it to controllers, then model inclusion



app.listen(config.port);

