const db = require("./databaseConfig")
const User = {
    findById: (id, callback) => {
        const dbConn = db.getConnection();

        dbConn.connect((err) => {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "SELECT * FROM user WHERE id = ?";

                dbConn.query(sql, [id], (err, results) => {

                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {

                        if (results.length === 0) {
                            return callback(null, null);
                        }else{
                            return callback(null, results);
                        }
                    }
                })
            }
        })
    },

    findAll: (callback) => {
        const dbConn = db.getConnection();

        dbConn.connect((err) => {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "SELECT * FROM user";

                dbConn.query(sql, [], (err, results) => {

                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {
                        console.log(results);
                        return callback(null, results);
                    }
                })
            }
        })
    },

    insert: (user, callback) => {
        const dbConn = db.getConnection();

        let {
            username,
            full_name,
            bio,
            date_of_birth
        } = user;

        dbConn.connect((err) => {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "INSERT INTO user (username, full_name, bio, date_of_birth) VALUES (?, ?, ?, ?);";

                dbConn.query(sql, [username, full_name, bio, date_of_birth], (err, results) => {

                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, results.insertId);
                    }
                })
            }
        })
    },

    edit: (id, user, callback) => {
        const dbConn = db.getConnection();


        let {
            username,
            full_name,
            bio,
            date_of_birth
        } = user;

        dbConn.connect((err) => {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "UPDATE user SET full_name = ?, username = ?, bio = ?, date_of_birth = ? WHERE id = ?;";

                dbConn.query(sql, [full_name, username, bio, date_of_birth, id], (err, results) => {

                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, results.insertId);
                    }
                })
            }
        })
    },

    delete: (id, callback) => {
        const dbConn = db.getConnection();
        dbConn.connect((err) => {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "DELETE FROM user WHERE id=?";

                dbConn.query(sql, [id], (err, results) => {

                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, results);
                    }
                })
            }
        })
    },

    addFriend: (userIDOne, userIDTwo, callback) => {
        const dbConn = db.getConnection();
        dbConn.connect((err) => {
            if (err) {  
                return callback(err, null);
            } else {
                const sql = "INSERT INTO friendship(fk_friend_one_id, fk_friend_two_id) VALUES(?,?)";

                // Add it in such a way that it is user one followed by user two
                dbConn.query(sql, [userIDOne, userIDTwo], (err, results) => {

                    if (err) {
                        return callback(err, null);
                    } else {
                        // Add it in such a way that it is user two followed by user one
                        dbConn.query(sql, [userIDTwo, userIDOne], (err, results) => {

                            dbConn.end();
        
                            if (err) {
                                return callback(err, null);
                            } else {
                                return callback(null, results);
                            }
                        })
                    }
                })
            }
        })
    },

    removeFriend: (userIDOne, userIDTwo, callback) => {
        const dbConn = db.getConnection();
        dbConn.connect((err) => {
            if (err) {  
                return callback(err, null);
            } else {
                const sql = "DELETE FROM friendship where fk_friend_one_id=? AND fk_friend_two_id=?";
                // Add it in such a way that it is user one followed by user two
                dbConn.query(sql, [userIDOne, userIDTwo], (err, results) => {

                    if (err) {
                        return callback(err, null);
                    } else {

                        // Add it in such a way that it is user two followed by user one
                        dbConn.query(sql, [userIDTwo, userIDOne], (err, results) => {

                            dbConn.end();
        
                            if (err) {
                                return callback(err, null);
                            } else {
                                return callback(null, results);
                            }
                        })

                        return callback(null, results);

                    }
                })
            }
        })
    },

    showFriends: (userID, callback) => {
        const dbConn = db.getConnection();
        dbConn.connect((err) => {
            if (err) {  
                return callback(err, null);
            } else {
                const sql = "SELECT u2.username, u2.bio FROM friendship f, user u1, user u2 WHERE f.fk_friend_one_id = u1.id and f.fk_friend_two_id = u2.id and f.fk_friend_one_id = ?;";
                // Add it in such a way that it is user one followed by user two
                dbConn.query(sql, [userID], (err, results) => {
                    dbConn.end();

                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, results);
                    }
                })
            }
        })
    },

}

module.exports = User;