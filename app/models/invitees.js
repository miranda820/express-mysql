// Example model


var query = function (connection, callback) {
 	// Use the connection
  	connection.query( 'SELECT firstName FROM invitees', function(err, rows) {
    	
    	if (err) throw err;
			console.log('rows', rows);
			//passing data to controller 
			callback(rows);

    	// And finish with the connection.
    	connection.release();
	});
}

module.exports = {
	query: query
}