var db = require("./databaseConfig")

var userDB = {
    getUser: function (userid, callback) {

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                var sql = "SELECT * FROM user WHERE userid = ?";

                dbConn.query(sql, [userid], function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result);
                    }
                })
            }
        })
    },

    getAllUsers: function (callback) {

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                var sql = "SELECT * FROM user";

                dbConn.query(sql, [], function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result);
                    }
                })
            }
        })
    },

    insertUser: function (username, email, role, password, callback) {

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                var sql = "INSERT INTO user(username, email, role, password) VALUES(?, ?, ?, ?)";

                dbConn.query(sql, [username, email, role, password], function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result);
                    }
                })
            }
        })
    },

    updateUser: function (userid, email, password, callback) {

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                var sql = "UPDATE user set email=?, password=? where userid=?";

                dbConn.query(sql, [email, password, userid], function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result);
                    }
                })
            }
        })
    },

    deleteUser: function (userid, callback) {

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                var sql = "DELETE FROM user WHERE userid=?";

                dbConn.query(sql, [userid], function (err, result) {
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result);
                    }
                })
            }
        })
    },
}

module.exports = userDB