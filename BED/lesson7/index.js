/*
  Name: Nabil Ridhwanshah Bin Rosli
  Class: DIT/FT/1B/05
  Group: None (Solo)
  Admin No: P2007421
*/

const app = require("./controller/app")

// Environment variables configuration
require("dotenv").config();

// Throw an error if the environment variables are not set
if(!process.env.PORT || !process.env.HOST){
    throw new Error("PORT and HOST environment variables are required. Check README.md configuration for more information!");
}

// Start the server
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}/`);
})