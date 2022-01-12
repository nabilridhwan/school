/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const Discount = {
    getAllDiscounts: (callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT p.name, p.description, p.categoryid, c.category as categoryname, p.brand, p.price as before_discounted_price, d.discount_id, da.discount_description, da.discount_amt, da.discount_type, dd.from, dd.to FROM discounts d, discount_dates dd, discount_amount da, products p, category c WHERE d.discount_amount_id = da.discount_amount_id AND d.discount_date_id = dd.discount_date_id AND p.categoryid = c.categoryid AND d.productid = p.productid;"
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
    
    getDiscountForProduct: ({productid}, callback) =>{

        productid = productid || null;
        
        var dbConn = db.getConnection();
        
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT p.name, p.description, p.categoryid, c.category as categoryname, p.brand, p.price as before_discounted_price, d.discount_id, da.discount_description, da.discount_amt, da.discount_type, dd.from, dd.to FROM discounts d, discount_dates dd, discount_amount da, products p, category c WHERE d.discount_amount_id = da.discount_amount_id AND d.discount_date_id = dd.discount_date_id AND p.categoryid = c.categoryid AND d.productid = p.productid AND d.productid = ?;"
                dbConn.query(sql, [productid], (err, result) => {
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

    insertDiscount: ({
        discount_amount_id,
        discount_date_id,
        productid
    }, callback) => {

        discount_amount_id = discount_amount_id || null;
        discount_date_id = discount_date_id || null;
        productid = productid || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "INSERT INTO discounts(discount_amount_id, discount_date_id, productid) VALUES(?,?,?)"
                dbConn.query(sql, [discount_amount_id, discount_date_id, productid], (err, result) => {
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

    deleteDiscount: ({
        discount_id
    }, callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "DELETE FROM discounts WHERE discount_id = ?"
                dbConn.query(sql, [discount_id], (err, result) => {
                    dbConn.end()


                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result)
                    }

                })
            }
        })
    }

}

module.exports = Discount;