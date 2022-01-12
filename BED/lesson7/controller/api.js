const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');
const verifyToken = require("../auth/verifyToken")

router.post("/login", async (req, res) => {
    try{
        let results = await Users.loginUser(req.body);
        res.status(200).json(results);
    }catch(e){
        res.status(500).send(e.statusCode);
    }
})

router.post("/user", verifyToken, (req, res) => {

    const {role, userid} = req;

    res.json({
        result: userid
    })
})

module.exports = router;