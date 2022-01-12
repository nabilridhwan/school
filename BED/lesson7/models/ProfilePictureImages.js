/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const db = require('../config/db');

const ProfilePictureImages = {
    getPublicId: ({
        userid
    }, callback) => {
        userid = userid || null;

        var dbConn = db.getConnection();
        // Insert into the image table first
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {
                const sql = "SELECT public_id from profile_picture_images WHERE userid = ?"
                dbConn.query(sql, [userid], (err, result) => {
                    dbConn.end();
                    if (err) {
                        return callback(err, null);
                    }
                    return callback(null, result)
                })

            }
        })
    },

    deleteAllProfilePictures: ({
        userid
    }, callback) => {
        const sql = "DELETE FROM profile_picture_images WHERE userid = ?"

        var dbConn = db.getConnection();
        dbConn.query(sql, [userid], (err, result) => {
            dbConn.end()
            if (err) {
                return callback(err, null);
            }
            console.log("Deleted from profile_picture_images table successfully")

            return callback(null, null);
        })

    },

    insertProfilePicture: ({
        userid,
        url,
        public_id
    }, callback) => {
        console.log("Insert function")
        var dbConn = db.getConnection();
        userid = userid || null;
        url = url || null;
        public_id = public_id || null;

        // Insert into the image table first
        dbConn.connect(function (err) {
            if (err) {
                return callback(err, null);
            } else {
                // Insert into the image table first
                const sql = "INSERT INTO profile_picture_images (userid, url, public_id) VALUES (?, ?, ?)"
                dbConn.query(sql, [userid, url, public_id], (err, result) => {

                    dbConn.end();
                    if (err) {
                        console.log("Error inserting into profile_picture_images table")
                        return callback(err, null);
                    }

                    console.log("Inserted into profile_picture_images table successfully")
                    return callback(null, result)
                })

            }
        })
    }
}

module.exports = ProfilePictureImages;