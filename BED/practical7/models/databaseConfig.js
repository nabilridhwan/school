const mysql = require("mysql");

const dbconnect = {
    getConnection: _ => {
        return mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "friendbook",
            dateStrings: true
        })
    }
}

module.exports = dbconnect;