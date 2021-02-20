require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "d6rii63wp64rsfb5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com"
  , // address of the server
  user: "kc98mmoqo6d3ml00", // username
  password: "jwydctc1wdzj5bl4",
  database: "wgnejndw88ea3vhm",
});

module.exports = connection;