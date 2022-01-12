/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const Product = {

    insertProduct: ({
        name,
        description,
        categoryid,
        brand,
        price
    }, callback) => {

        name = name || null;
        description = description || null;
        categoryid = categoryid || null;
        brand = brand || null;
        price = price || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "INSERT INTO products(name, description, categoryid, brand, price) VALUES(?, ?, ?, ?, ?)"
                dbConn.query(sql, [name, description, categoryid, brand, price], (err, result) => {
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

    getAllProducts: (callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT p.name, p.description, p.categoryid, c.category as categoryname, p.brand, p.price FROM products p, category c WHERE p.categoryid = c.categoryid"

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

    getProduct: ({
        id
    }, callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT p.name, p.description, p.categoryid, c.category as categoryname, p.brand, p.price FROM products p, category c WHERE p.categoryid = c.categoryid AND p.productid = ?;"
                dbConn.query(sql, [id], (err, result) => {
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

    deleteProduct: ({
        id
    }, callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "DELETE FROM products WHERE productid = ?"
                dbConn.query(sql, [id], (err, result) => {
                    dbConn.end()

                    if (err) {
                        callback(err, null);
                    } else {
                        return callback(err, result)
                    }

                })
            }
        })
    },

    getReviewsForProduct: ({
        id
    }, callback) => {
        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT p.productid, u.userid, u.username, r.rating, r.review, r.created_at FROM products p, reviews r, users u WHERE p.productid = r.productid AND r.userid = u.userid AND r.productid = ?;"
                dbConn.query(sql, [id], (err, result) => {
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

module.exports = Product;