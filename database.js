const mysql = require('mysql');
const config = require('./config');

const database = mysql.createPool({
    host:config.host,
    user:config.user,
    port:config.port,
    password:config.password,
    database:config.database
});

database.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

module.exports = database;