const Users = require("./Users")
const Category = require("./Category")
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/users", (req, res) => {
    Users.getAllUsers((err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    })
})

app.get("/users/:userid", (req, res) => {

    const {
        userid
    } = req.params;

    Users.getUser(userid, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    })
})

app.post("/users", (req, res) => {
    const {
        username,
        email,
        role,
        password
    } = req.body;

    Users.addUser(username, email, role, password, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(user);
        }
    })
})

app.put("/users/:userid", (req, res) => {

    const {
        userid
    } = req.params;
    const {
        email,
        password
    } = req.body;

    Users.updateUser(email, password, userid, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(user);
        }
    })
})

app.delete("/users/:userid", (req, res) => {

    const {
        userid
    } = req.params;

    Users.deleteUser(userid, (err, user) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(user);
        }
    })
})

app.get("/category", (req, res) => {
    Category.getAllCategories((err, category) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(category);
        }
    })
})

app.get("/category/:categoryID/furniture", (req, res) => {
    const {categoryID} = req.params;
    Category.getFurnituresFromCategory(categoryID, (err, furnitures) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({"Furniture": furnitures});
        }
    })
})

module.exports = app