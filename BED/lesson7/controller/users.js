/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

const multer = require("multer")
const ProfilePictureImages = require('../models/ProfilePictureImages.js');

// Require cloudinary
const Cloudinary = require('../utils/cloudinary.js');
const { append } = require('express/lib/response');

// profile_picture field only accepts 1 image with limit of 1MB
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1000000
    },
    fileFilter: function (req, file, cb) {
        // Check the file type
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error("The file provided is not a jpeg, jpg or png file"));
        }
    }
}).single("profile_picture")

// Endpoint 1: POST users 
router.post("/users", (req, res) => {
    // Insert the user
    Users.insertUser(req.body, (err, data) => {
        if (err) {

            console.log(err)
            const errorNumber = err.errno;
            // If the user exists (duplicated username or email), send a 422 status code
            if (errorNumber === 1062) {
                res.status(422).send("The email or username provided already exists");
            } else {
                res.sendStatus(500);
            }
        } else {
            // Send back the userid
            res.status(201).json({
                userid: data.insertId
            });
        }
    })
})

// Endpoint 2: GET /users
router.get("/users", (req, res) => {
    // Get all users
    Users.getAllUsers((err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(users);
        }
    })
})

// Endpoint 3: GET /users/:id
router.get("/users/:id", (req, res) => {
    const {
        id
    } = req.params;

    // check if the id is a number
    if (isNaN(id)) {
        return res.status(400).send("The User ID provided must be a number")
    }

    // Get user by ID
    Users.getUser({
        id
    }, (err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // If there is no data, send a 404 status code
            if (users.length == 0) {
                res.sendStatus(404);
            } else {
                res.status(200).json(users);
            }
        }
    })

})


// Endpoint 4: PUT /users/:id
router.put("/users/:id", (req, res) => {
    const {
        id
    } = req.params;

    // check if the id is a number
    if (isNaN(id)) {
        res.status(400).send("The User ID provided must be a number")
    } else {
        // Update the user
        Users.updateUser({
            id,
            ...req.body
        }, (err, data) => {
            if (err) {
                console.log(err)
                // If the username or email is duplicated, send a 422 status code
                if (err.errno === 1062) {
                    res.status(422).send("The new username OR new email provided already exists.")
                } else {
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(204);
            }
        })
    }
})

// User profile image url
router.post("/users/:userid/image", (req, res) => {

    // Check if req.params.userid is a number
    if (isNaN(req.params.userid)) {
        return res.status(400).send("The User ID provided must be a number")
    }

    upload(req, res, (err) => {

        // Error checking!
        if (err) {
            if (err.message == "File too large") err.message += ". The limit is 1MB";
            if (err.message == "Unexpected field") err.message = "'profile_picture' field not found OR select only ONE image"

            if (err.message == "The file provided is not a jpeg, jpg or png file") {
                return res.sendStatus(415)
            }
            return res.status(500).send(err.message);
        } else {
            // If there is no file, return with a status code of 400 indicating a bad request
            if (!req.file) {
                return res.status(400).send("There is no image provided");
            }

            // Get public id of the user's profile picture
            ProfilePictureImages.getPublicId({
                userid: req.params.userid
            }, async (err, result) => {
                if (err) {
                    return res.sendStatus(500);
                }

                // Delete the image from cloudinary if public id is found
                if (result.length > 0) {
                    let public_id = result[0].public_id
                    try {
                        // There is a public id! Proceed to delete it!
                        let data = await Cloudinary.deleteFileFromCloudinary(public_id)
                        // Deleted successfully
                        if (data.result == "ok") {
                            console.log("Deleted profile picture from cloudinary successfully")
                        } else {
                            console.log("No profile picture found in cloudinary... Adding one!")
                        }
                    } catch (error) {
                        return res.status(500).send(error);
                    }
                }

                try {
                    // Check if the user exist before uploading (this save resources!)
                    Users.getUser({
                        id: req.params.userid
                    }, async (err, result) => {
                        if (err) {
                            return res.sendStatus(500);
                        }

                        // If user is not found, return with a status code of 404
                        if (result.length == 0) {
                            return res.sendStatus(404);
                        }

                        // Upload the image to cloudinary
                        let data = await Cloudinary.uploadFileToCloudinary(req.file.buffer, "profile_pictures");

                        // Get the public id and url of the image
                        const {
                            public_id,
                            secure_url
                        } = data;

                        // Delete all the images from the database
                        ProfilePictureImages.deleteAllProfilePictures({
                            ...req.params
                        }, (err, data) => {
                            if (err) {
                                return res.sendStatus(500);
                            } else {
                                // Insert into database
                                ProfilePictureImages.insertProfilePicture({
                                    ...req.params,
                                    url: secure_url,
                                    public_id
                                }, (err, data) => {
                                    if (err) {
                                        return res.status(500).send(err);
                                    } else {
                                        console.log("Nice! Inserted profile picture into database successfully")

                                        // Finally, update the user's profile picture url
                                        Users.updateProfilePictureUrl({
                                            ...req.params,
                                            profile_pic_url: secure_url
                                        }, (err, data) => {
                                            if (err) {
                                                return res.sendStatus(500)
                                            } else {
                                                console.log("Successfully updated profile picture url in database")
                                                return res.sendStatus(204)
                                            }
                                        })

                                    }
                                })

                            }
                        })

                    })
                } catch (error) {
                    return res.status(500).send(error);

                }
            })
        }
    })


})

module.exports = router;