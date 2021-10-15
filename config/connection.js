mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Miso",
    database: "mycompany",
  },
  console.log("Connected to the mycompany database")
);

module.exports = db;