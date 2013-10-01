var creatConnection = function(config, callback){
var mysql = require('mysql');
var pool = mysql.createPool(config.sql);
var getConnection;
console.log('making connection');

pool.getConnection(function(err, connection) {

      callback(connection);
  });

}


module.exports = {
  creatConnection: creatConnection,
}