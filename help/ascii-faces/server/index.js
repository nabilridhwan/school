const express = require("express");
const app = express();
const cool = require("cool-ascii-faces");
const cors = require("cors");

app.use(cors())


app.get("/", (req, res) => {
    res.json({
        face: cool()
    })
})

app.listen(process.env.PORT || 4000)
