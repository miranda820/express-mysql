//controller


exports.index = {

    getData: function (req, res, next) {
      var item = require ('../models/invitees');
      item.query( function (row) {
        req.query = row;
        console.log('item',req.query);
        next();
      });
      
    },

    getView:  function(req, res){
      console.log(req.query);
      res.render('home/index', {
          title: 'site',
          invitees: req.query
        });
  }
}
