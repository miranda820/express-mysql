var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = 'development';//process.env.NODE_ENV || 'development';

var config = {
  development: {
    sql: {
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'wedding_site'
    },
  root: rootPath,
    app: {
      name: 'mvc'
    },
    port: 3000
},

  test: {
   /* root: rootPath,
    app: {
      name: 'mvc'
    },
    port: 3000,
    db: 'mongodb://localhost/mvc-test'*/
  },

  production: {
    /*root: rootPath,
    app: {
      name: 'mvc'
    },
    port: 3000,
    db: 'mongodb://localhost/mvc-production'*/
  }
};

module.exports = config[env];
//console.log('config module', module);
