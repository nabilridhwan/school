let mysql = require('mysql');

let dbconnect = {
    getConnection: function () {
        let conn = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'furniture'
        });
        return conn;
    }
}

module.exports = dbconnect;