const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const bodyParser = require("body-parser")

const port = 3000;
const hostname = "localhost";

app.use(serveStatic(__dirname + '/public'));
app.use(bodyParser.json()); // Do the chunking stuff for json

app.post("/login", (req, res) => {
    var {username, password} = req.body;

    res.send(req.body)
})

app.listen(port, hostname, () => {
    console.log(`Server hosted at http://${hostname}:${port}/`);
});