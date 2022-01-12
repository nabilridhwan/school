/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const Reviews = {

    insertReview: ({
        productid,
        userid,
        rating,
        review,
    }, callback) => {

        productid = productid || null;
        userid = userid || null;
        rating = rating || null;
        review = review || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "INSERT INTO reviews(productid, userid, rating, review) VALUES(?,?,?,?)"
                dbConn.query(sql, [productid, userid, rating, review], (err, result) => {
                    dbConn.end()

                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result)
                    }

                })
            }
        })
    },

}

module.exports = Reviews;