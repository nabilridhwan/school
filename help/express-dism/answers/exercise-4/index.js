const express = require("express");
const app = express();
const PORT = 3000;

const rug = require("random-username-generator");

app.get("/api/username", (req, res) => {
    res.json({
        success: true,
        username: rug.generate(),
    });
});

app.get("/api/username/:count", (req, res) => {
    const count = parseInt(req.params.count);
    if (Number.isNaN(count)) {
        res.json({
            success: false,
            username: "",
            message: "Count must be a number",
        });
    }

    const usernames = [];
    for (let i = 0; i < count; i++) {
        usernames.push(rug.generate());
    }

    res.json({
        success: true,
        usernames,
    });
});

app.post("/api/username", (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
