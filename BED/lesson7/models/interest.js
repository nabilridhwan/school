/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const Interest = {

    getAllInterests: (callback) => {
        var dbConn = db.getConnection();

        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT u.userid, u.username, u.email, c.categoryid, c.category from interest i, users u, category c WHERE i.userid = u.userid AND i.categoryid = c.categoryid"
                dbConn.query(sql, [], (err, result) => {
                    dbConn.end();
                    if (err) {
                        return callback(err);
                    } else {
                        return callback(null, result);
                    }
                })
            }
        })
    },

    getInterestsById: ({
        userid
    }, callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT u.userid, u.username, u.email, c.categoryid, c.category from interest i, users u, category c WHERE i.userid = u.userid AND i.categoryid = c.categoryid AND u.userid = ?;"
                dbConn.query(sql, [userid], (err, result) => {

                    dbConn.end();
                    if (err) {
                        return callback(err);
                    } else {
                        return callback(null, result);
                    }
                })
            }
        })
    },

    insertInterests: ({
        userid,
        categoryids
    }, callback) => {
        userid = userid || null;
        categoryids = categoryids != null && categoryids.length > 0 ? categoryids.replace(/\s/g, '').split(',') : null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                if (categoryids != null) {


                    const sql = "INSERT INTO interest(userid, categoryid) VALUES(?,?)"
                    let categoryPromises = categoryids.map(categoryId => {
                        return new Promise((resolve, reject) => {

                            dbConn.query(sql, [userid, categoryId], (err, result) => {

                                if (err) {
                                    reject(err)
                                } else {
                                    resolve(result)
                                }
                            })
                        })
                    })

                    Promise.all(categoryPromises)
                        .then(data => {
                            return callback(null, data);
                        }).catch(e => {
                            console.log("Error", e)
                            return callback(e, null)
                        }).finally(() => {
                            dbConn.end()
                        })

                } else {
                    callback(true, null);
                }
            }
        })
    },

}

module.exports = Interest;