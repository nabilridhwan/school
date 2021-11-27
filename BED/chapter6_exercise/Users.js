const db = require("./databaseConfig")

const UserDB = {

    getAllUsers: (callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "SELECT * FROM user";
                connection.query(sql, (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    },
    
    getUser: (userid, callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "SELECT * FROM user WHERE userid = ?";
                connection.query(sql, [userid], (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    },

    addUser: (username, email, role, password, callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "INSERT into user(username, email, role, password) VALUES(?,?,?,?)";
                connection.query(sql, [username, email, role, password], (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    },

    updateUser: (email, password, userid, callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "UPDATE user SET email = ?, password = ? WHERE userid = ?";
                connection.query(sql, [email, password, userid], (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    },

    deleteUser: (userid, callback) => {
        const connection = db.getConnection();
        connection.connect((err) => {
            if(err) return callback(err, null);
            else{
                const sql = "DELETE FROM user WHERE userid = ?";
                connection.query(sql, [userid], (err, result) => {
                    connection.end()
                    if(err) return callback(err, null);
                    else{
                        return callback(null, result);
                    }
                })
            }
        });
    }
}

module.exports = UserDB;