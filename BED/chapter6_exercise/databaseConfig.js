var mysql = require('mysql');

var dbConnect = {
    getConnection: () => {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "furniture"
        })
    }
}

module.exports = dbConnect;