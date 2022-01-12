/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const mysql = require('mysql');

const dbconnect = {
    getConnection: function () {
        let conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'sp_it',
            dateStrings: true
        });
        return conn;
    }
}

module.exports = dbconnect;