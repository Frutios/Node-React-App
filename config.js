require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  JAWSDB_URL
});

module.exports = connection;