/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const DiscountAmount = {
    getAllDiscountAmount: (callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT * FROM discount_amount;"
                dbConn.query(sql, [], (err, result) => {
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

    insertDiscountAmount: ({
        discount_description,
        discount_amt,
        discount_type
    }, callback) => {

        discount_description = discount_description || null;
        discount_amt = discount_amt || null;
        discount_type = discount_type || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "INSERT INTO discount_amount(discount_description, discount_amt, discount_type) VALUES(?,?,?);"
                dbConn.query(sql, [discount_description, discount_amt, discount_type], (err, result) => {
                    dbConn.end()
                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result.insertId)
                    }

                })
            }
        })
    }

}

module.exports = DiscountAmount;