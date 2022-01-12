/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const ProductImages = {
    getPublicId: ({
        productid
    }, callback) => {
        productid = productid || null;

        var dbConn = db.getConnection();
        // Insert into the image table first
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "SELECT public_id from product_images WHERE productid = ?"
                dbConn.query(sql, [productid], (err, result) => {

                    dbConn.end()

                    if (err) {
                        return callback(err, null);
                    }
                    return callback(null, result)
                })

            }
        })
    },
    getImageByProductId: ({
        productId
    }, callback) => {
        productId = productId || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {

            if (err) {
                callback(err, null);
            } else {
                const sql = "SELECT i.url FROM products p, product_images i WHERE p.productid = i.productid AND p.productid = ?;"
                dbConn.query(sql, [productId], (err, result) => {

                    dbConn.end()

                    if (err) {
                        callback(err);
                    } else {
                        return callback(err, result)
                    }

                })
            }

        });

    },

    deleteImagesByProductId: (productId, callback) => {
        productId = productId || null;

        var dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {

                // Delete every entry with the id of productId
                const deleteSql = "DELETE FROM product_images WHERE productid = ?";

                dbConn.query(deleteSql, [productId], (err, result) => {

                    dbConn.end()

                    if (err) {
                        return callback(err, null);
                    } else {
                        return callback(null, result)
                    }

                })
            }
        })

    },

    getPublicId: (productid, callback) => {
        productid = productid || null;
        let dbConn = db.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "SELECT public_id from product_images WHERE productid = ?"
                dbConn.query(sql, [productid], (err, result) => {

                    dbConn.end();
                    if (err) {
                        return callback(err, null);
                    }
                    return callback(null, result)
                })

            }
        })
    },

    insertProductImages: ({
        productId,
        fileObjectArray
    }, callback) => {
        var dbConn = db.getConnection();
        productId = productId || null;
        fileObjectArray = fileObjectArray || null;

        // Insert into the image table first
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {


                // fileObjectPromises is an array of promises that is resolved when there is no error

                const sql = "INSERT INTO product_images(productid, url, public_id) VALUES(?,?, ?)"
                const fileObjectPromises = fileObjectArray.map(fileObject => {
                    return new Promise((resolve, reject) => {
                        // Inserts into the database
                        dbConn.query(sql, [productId, fileObject.secure_url, fileObject.public_id], (err, result) => {

                            if (err) {
                                reject(err)
                            } else {
                                resolve(true)
                            }
                        })
                    })
                })

                // Make sure the all the promises are met, if it is met, return callback with no error, else return callback with error and then finally end the connection
                Promise.all(fileObjectPromises)
                    .then(data => {
                        return callback(null, true)
                    })
                    .catch(error => {
                        return callback(error, null)
                    })
                    .finally(() => {
                        dbConn.end()
                    })

            }
        })
    },

}

module.exports = ProductImages;