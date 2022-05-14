// Dont need to remember
// Read more here: https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const server = express();
const port = 4000;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
