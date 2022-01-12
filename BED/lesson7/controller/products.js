/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const express = require('express');
const router = express.Router();

const Product = require("../models/product");
const Reviews = require("../models/review");
const path = require("path");

const multer = require('multer');
const ProductImages = require('../models/ProductImages');

// Require cloudinary
const Cloudinary = require('../utils/cloudinary');

// Storage uses memoryStorage
// Limits of fileSize 1MB
// Fields: 1
// Field name: product_images
// Maximal number of files: 5
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
            cb(new Error("One or more files provided are not a jpeg, jpg or png file"));
        }
    }
}).array('product_images', 5)

// Get all products
router.get("/", (req, res) => {
    // Get all products
    Product.getAllProducts((err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(data);
        }
    })
})

// Endpoint 7: POST /product
router.post("/", (req, res) => {
    // Insert the product
    Product.insertProduct(req.body, (err, data) => {
        if (err) {
            // If there is duplicated, send a status code 422
            if (err.errno == 1062) {
                return res.status(422).send("The product name provided already exists");
            }
            return res.sendStatus(500);

        } else {
            // Send back the product_id
            res.status(201).json({
                "productid": data.insertId
            })
        }
    })
})

// Endpoint 8: GET /product/:id
router.get("/:id", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.id)) {
        return res.status(400).send("The Product ID provided must be a number")
    }

    // Get product by ID
    Product.getProduct({
        id: req.params.id
    }, (err, product) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(product);
        }
    })
})
// Endpoint 9: DELETE /product/:id
router.delete("/:id", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.id)) {
        return res.status(400).send("The Product ID provided must be a number")
    }


    // Delete product by ID
    Product.deleteProduct({
        id: req.params.id
    }, (err, product) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // If there is no data, send a 404 status code
            if (product.affectedRows == 0) {
                return res.sendStatus(404);
            }
            res.sendStatus(204);
        }
    })
})

// Endpoint 10: POST /product/:id/review/
router.post("/:id/review", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.id)) {
        return res.status(400).send("The Product ID provided must be a number")
    }

    // Insert the review
    Reviews.insertReview({
        productid: req.params.id,
        ...req.body
    }, (err, data) => {
        if (err) {
            // If there is a foreign key constraint (meaning one of the data is not found), send a 404 status code
            if (err.errno == 1452) {
                res.sendStatus(404);
            } else {
                res.sendStatus(500);
            }
        } else {
            // Send back the review_id
            res.status(200).json({
                "reviewid": data.insertId
            })
        }
    })
})

// Endpoint 11: GET /product/:id/reviews
router.get("/:id/review", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.id)) {
        return res.status(400).send("The Product ID provided must be a number")
    }

    // Get reviews by product ID
    Product.getReviewsForProduct({
        ...req.params
    }, (err, data) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
        } else {
            // If there is no data, send a 404 status code
            if (data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.sendStatus(404);
            }
        }
    })
})

// Upload an image for a specific product
router.post("/:productId/image", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.productId)) {
        return res.status(400).send("The Product ID provided must be a number")
    }
    // Insert the page
    upload(req, res, function (err) {
        // Error handling!
        if (err) {
            if (err.message == "File too large") err.message += ". The limit is 1MB";
            if (err.message == "Unexpected field") {
                err.message = "'product_images' field not found OR there is a maximum limit of 5 images per product"
            }

            if (err.message == "One or more files provided are not a jpeg, jpg or png file") {
                return res.sendStatus(415)
            }
            return res.status(500).send(err.message);
        } else {

            // Files array
            const files = req.files;

            // Check if there are files, otherwise return an error
            if (!files || files.length == 0) {
                return res.status(400).send("There is/are no image(s) provided.")
            }

            // Get all the public id of the images
            ProductImages.getPublicId(req.params.productId, (err, data) => {

                // If there is an error, send a 500 status code
                if (err) {
                    return res.status(500).send(err);
                }

                // If there is data
                if (data.length > 0) {
                    // There are public ids for the product, so we need to delete them

                    // Get all the public ids
                    const arrayOfPublicIds = data.map(image => image.public_id);
                    arrayOfPublicIds.forEach(async (public_id) => {
                        try {

                            // Delete the image from cloudinary
                            let data = await Cloudinary.deleteFileFromCloudinary(public_id);

                            // Logging purposes!
                            if (data.result == "ok") {
                                console.log("Deleted image from cloudinary")
                            } else {
                                console.log("Could not delete image from cloudinary")
                            }
                        } catch (error) {
                            // If there is an error, send a 500 status code
                            return res.status(500).send(error)
                        }

                    })
                }

                // After deleting the images from cloudinary, we can insert the new ones
                // Start off by deleting all the images by product id
                ProductImages.deleteImagesByProductId(req.params.productId, async (err, data) => {
                    if (err) {
                        return res.status(500).send(err);
                    }

                    try {

                        // We check if the product exists (before uploading), this save resources!
                        Product.getProduct({
                            id: req.params.productId
                        }, async (err, product) => {
                            if (err) {
                                return res.status(500).send(err)
                            } else {

                                // If the product exits, we can upload the images
                                if (product.length == 0) {
                                    return res.status(404).send("Product not found")
                                }

                                // allImageUploaded is an array of promises
                                // Upload all the images
                                let allImagesUploaded = files.map(async file => {
                                    return await Cloudinary.uploadFileToCloudinary(file.buffer, "product_images");
                                })

                                // Await for all the promise to be resolved
                                let imagesResponse = await Promise.all(allImagesUploaded);

                                // Insert the images into the database
                                ProductImages.insertProductImages({
                                    ...req.params,
                                    fileObjectArray: imagesResponse
                                }, (err, data) => {
                                    if (err) {
                                        return res.status(500).send(err);
                                    } else {
                                        return res.sendStatus(204);
                                    }
                                })
                            }
                        })

                    } catch (err) {
                        return res.status(500).send(err)
                    }
                })
            })
        }
    })
})

// Get all the images for a specific product
router.get("/:productId/image", (req, res) => {

    // Check if id is a number, otherwise send a 400 status code
    if (isNaN(req.params.productId)) {
        return res.status(400).send("The Product ID provided must be a number")
    }
   
    // Get all the images by product id
    ProductImages.getImageByProductId({
        ...req.params
    }, (err, data) => {
        if (err) {
            res.status(500);
        } else {
            // If there is no data, send a 404 status code
            if (data.length > 0) {
                res.status(200)
                res.json(data.map(data => data.url))
            } else {
                res.sendStatus(404);
            }
        }
    })
})

module.exports = router;