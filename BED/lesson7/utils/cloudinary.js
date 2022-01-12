/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

// Environment Variables
require("dotenv").config();

// Get the environment variables
const {
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    CLOUDINARY_CLOUD_NAME
} = process.env

if(!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET || !CLOUDINARY_CLOUD_NAME){
    throw new Error("Cloudinary credentials not found! Have you included them in the .env file as per the instructions found in README.md")
}

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
})

const uploadFileToCloudinary = (buffer, cloudinaryFolderName) => {
    return new Promise(function (resolve, reject) {
        //Create a powerful, writable stream object which works with Cloudinary
        let stream = cloudinary.uploader.upload_stream({
            folder: cloudinaryFolderName,
            allowed_formats: "png,jpg",
            resource_type: "image"
        }, (error, result) => {
            if (result) {
                resolve(result)
            } else {
                reject(error)
            }
        })

        streamifier.createReadStream(buffer).pipe(stream);

    }); //End of Promise 
}

const deleteFileFromCloudinary = (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (result) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

module.exports = {
    uploadFileToCloudinary,
    deleteFileFromCloudinary,
}