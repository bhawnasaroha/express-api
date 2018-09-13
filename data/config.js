const mysql = require('mysql');

// set database connection credentials
const config = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'api',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};

//Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;