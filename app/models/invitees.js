// Example model


var db = require('../../database');

//db.connect();

var query = function ( callback ) {
	console.log('Article called');
	db.connection.query('SELECT firstName FROM invitees', function(err, rows, fields) {

	  if (err) throw err;

	  console.log('rows', rows);
	  callback(rows);

	 db.end();

	});
}


module.exports = {
	query: query
}
