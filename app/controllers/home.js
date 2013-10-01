
exports.index = function(req, res, connection){
    var invitees = require('../models/invitees');
    invitees.query(connection, function (row) {
      res.render('home/index', {
        title: 'site',
        //passing data to view 
        invitees: row
      });
    });
}

