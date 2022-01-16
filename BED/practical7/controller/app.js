const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config.js")


const User = require("../models/User");
const Post = require("../models/Post");
const isLoggedInMiddleware = require("../auth/isLoggedInMiddleware.js");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.get("/users", (req, res) => {
    User.findAll((err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(users);
        }
    })
})

app.get("/users/:userID", isLoggedInMiddleware, (req, res) => {
    const {
        userID
    } = req.params;

    if (isNaN(parseInt(userID))) {
        res.sendStatus(400);
    } else {
        User.findById(userID, (err, user) => {
            if (err) {
                res.sendStatus(500);
            } else {
                if (user == null) {
                    res.sendStatus(404);
                } else {
                    res.status(200).json(user);
                }

            }
        })
    }
})

app.post("/users", (req, res) => {
    User.insert(req.body, (err, user) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.status(201).json({
                userID: user
            })
        }
    })
})

app.put("/users/:userID", (req, res) => {
    const userID = parseInt(req.params.userID);
    if (isNaN(userID)) {
        res.status(400).send();
        return;
    }

    User.edit(userID, req.body, (error) => {
        if (error) {
            console.log(error);
            res.status(500).send();
            return;
        };
        res.status(204).send();
    });
})

app.get("/posts", (req, res) => {
    Post.findAll((err, posts) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(posts);
        }
    })
})

app.post("/posts", (req, res) => {
    Post.insert(req.body, (err, postID) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.status(201).json({
                postID: postID
            })
        }
    })
})

app.get("/posts/:postID", (req, res) => {
    const {
        postID
    } = req.params;

    if (isNaN(parseInt(postID))) {
        res.sendStatus(400);
    } else {
        Post.findByID(postID, (err, post) => {
            if (err) {
                res.sendStatus(500);
            } else {
                if (post == null) {
                    res.sendStatus(404);
                } else {
                    res.status(200).json(post);
                }

            }
        })
    }
})

app.delete("/posts/:postID", (req, res) => {
    const {
        postID
    } = req.params;

    Post.delete(postID, (err, post) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(204).json(post);
        }
    })
})

app.put("/posts/:postID", (req, res) => {
    const {
        postID
    } = req.params;

    Post.edit(postID, req.body, (err, post) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    })
})

app.post("/posts/:postID/likers/:likerID", (req, res) => {
    const {
        postID,
        likerID
    } = req.params;

    Post.like(postID, likerID, (err, post) => {
        if (err) {
            console.log(err);

            if (err.code === "ER_DUP_ENTRY") {
                res.sendStatus(409);
            } else {
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(201);
        }
    })
})

app.delete("/posts/:postID/likers/:likerID", (req, res) => {
    const {
        postID,
        likerID
    } = req.params;

    Post.unlike(postID, likerID, (err, post) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(204);
        }
    })
})

app.get("/users/:userID/posts", (req, res) => {
    Post.findByUserID(req.params.userID, (err, posts) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.status(200).json(posts);
        }
    })
})

app.get("/posts/:postID/likers", (req, res) => {
    Post.findLikersByPostIDs(req.params.postID, (err, posts) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.status(200).json(posts);
        }
    })
})

app.post("/login/", (req, res) => {
  User.verify(
    req.body.username,
    req.body.password,
    (error, user) => {
      if (error) {
        res.status(500).send();
        return;
      }
      if (user === null) {
        res.status(401).send();
        return;
      }
      const payload = { user_id: user.id };
      jwt.sign(payload, JWT_SECRET, { algorithm: "HS256" }, (error, token) => {
        if (error) {
          console.log(error);
          res.status(401).send();
          return;
        } 
        res.status(200).send({
          token: token,
          user_id: user.id
        });
      })
  });
});



module.exports = app;