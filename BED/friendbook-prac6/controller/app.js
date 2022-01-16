const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config.js");
const isLoggedInMiddleware = require("../auth/isLoggedInMiddleware");


// import the User model
const User = require("../models/User");
const Post = require("../models/Post");

// import body-parser middleware
const bodyParser = require("body-parser");

// use the middleware
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.use(urlencodedParser); //attach body-parser middleware
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/", (req, res, next) => {
  User.findAll((error, users) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    };
    res.status(200).send(users);
  });
});

app.get("/users/:userID/", isLoggedInMiddleware, (req, res, next) => {

  console.log(req.decodedToken)
  const userID = parseInt(req.params.userID);
  // if userID is not a number, send a 400.
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  if (userID !== req.decodedToken.user_id) {
    return res.sendStatus(403);
  }

  User.findByID(userID, (error, user) => {
    if (error) {
      res.status(500).send();
      return;
    };

    // send a 404 if user is not found.
    if (user === null) {
      res.status(404).send();
      return;
    };
    res.status(200).send(user);
  });
});

app.post("/users/", (req, res, next) => {
  User.insert(req.body, (error, userID) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    };
    res.status(201).send({
      userID
    });
  });
});

app.put("/users/:userID/", (req, res, next) => {
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
});

app.get("/users/:userID/friends", (req, res) => {
  const userID = parseInt(req.params.userID);
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  User.showFriends(userID, (error, friends) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(200).send(friends);
  });
});

app.post("/users/:userID/friends/:friendID", (req, res) => {
  const userID = parseInt(req.params.userID);
  const friendID = parseInt(req.params.friendID);
  if (isNaN(userID) || isNaN(friendID)) {
    res.status(400).send();
    return;
  }

  if (userID === friendID) {
    res.status(400).send();
    return;
  }

  if (userID !== req.decodedToken.user_id) {
    return res.sendStatus(403);
  }

  User.addFriend(userID, friendID, (error) => {
    if (error) {
      // if friendship already exists,
      // send a 201 as if successful because this endpoint is idempotent.
      if (error.code === "ER_DUP_ENTRY") {
        res.status(201).send();
        return;
      }

      // one or both user ids do not exist
      if (error.code === "ER_NO_REFERENCED_ROW_2") {
        res.status(400).send();
        return;
      }

      // if unknown error then we send a generic 500.
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(201).send();
  });
});

app.delete("/users/:userID/friends/:friendID/", (req, res) => {
  const userID = parseInt(req.params.userID);
  const friendID = parseInt(req.params.friendID);

  if (isNaN(userID) || isNaN(friendID)) {
    res.status(400).send();
    return;
  }

  if (userID !== req.decodedToken.user_id) {
    return res.sendStatus(403);
  }


  User.removeFriend(userID, friendID, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(204).send();
  });
});

app.get("/posts", (req, res, next) => {
  Post.findAll((error, posts) => {
    if (error) {
      console.log(error);
      res.status(500).send();

    } else {

      res.statusCode = 200;
      res.send(posts);
    }
  });
});

app.post("/posts", (req, res, next) => {

  if (!req.decodedToken) {
    return res.sendStatus(403);
  }

  Post.insert(req.body, (error, postID) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(201).send({
      postID
    });
  });
});

app.get("/posts/:postID", (req, res, next) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  Post.findByID(postID, (error, post) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    if (post === null) {
      res.status(404).send();
      return;
    }
    res.status(200).send(post);
  });
});

app.put("/posts/:postID", isLoggedInMiddleware, (req, res, next) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  Post.findByID(req.params.postID, (err, results) => {

    console.log(req.decodedToken)
    if (err) {
      return res.sendStatus(500);
    }

    if(!results){
      return res.sendStatus(404);
    }

    const {
      fk_poster_id: posterID
    } = results;

    if (req.decodedToken.user_id !== posterID) {
      return res.sendStatus(403)
    }


    Post.edit(postID, req.body, (error, results) => {
      if (error) {
        res.status(500).send();

      } else if (results.affectedRows == 0) {
        res.status(404).send();

      } else {
        res.status(204).send();
      }
    });

  })
});

app.delete("/posts/:postID", isLoggedInMiddleware, (req, res, next) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  Post.findByID(req.params.postID, (err, results) => {

    console.log(req.decodedToken)
    if (err) {
      return res.sendStatus(500);
    }

    if(!results){
      return res.sendStatus(404);
    }

    const {
      fk_poster_id: posterID
    } = results;

    if (req.decodedToken.user_id !== posterID) {
      return res.sendStatus(403)
    }




    Post.delete(postID, (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send();

      } else if (results.affectedRows == 0) {
        res.status(404).send();

      } else {
        res.status(204).send();
      }
    });


  })

});

app.get("/users/:userID/posts", (req, res, next) => {
  const userID = parseInt(req.params.userID);
  if (isNaN(userID)) {
    res.status(400).send();
    return;
  }

  Post.findByUserID(userID, (error, posts) => {
    if (error) {
      console.log(error);
      res.status(500).send();
      return;
    }
    res.status(200).send(posts);
  });
});

app.post("/posts/:postID/likers/:likerID", isLoggedInMiddleware, (req, res) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  const likerID = parseInt(req.params.likerID);
  if (isNaN(likerID)) {
    res.status(400).send();
    return;
  }

  if(likerID !== req.decodedToken.user_id) {
    return res.sendStatus(403);
  }

  Post.like(postID, likerID, (error) => {
    if (error) {
      // do not throw error if post already liked
      if (error.code === "ER_DUP_ENTRY") {
        res.status(409).send();

      } else {
        console.log(error);
        res.status(500).send();

      }
    } else {
      res.status(201).send();
    }
  });
});

app.get("/posts/:postID/likers", (req, res) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  Post.findLikers(postID, (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send();

    } else {
      res.status(200).send(results);
    }
  });
});

app.delete("/posts/:postID/likers/:likerID", isLoggedInMiddleware,(req, res) => {
  const postID = parseInt(req.params.postID);
  if (isNaN(postID)) {
    res.status(400).send();
    return;
  }

  const likerID = parseInt(req.params.likerID);
  if (isNaN(likerID)) {
    res.status(400).send();
    return;
  }

  if(likerID !== req.decodedToken.user_id){
    return res.sendStatus(403);
  }

  Post.unlike(postID, likerID, (error) => {
    if (error) {
      console.log(error);
      res.status(500).send();
    } else {
      res.status(204).send();
    }
  });
});

app.post("/login/", (req, res) => {
  User.verify(
    req.body,
    (error, user) => {
      if (error) {
        res.status(500).send();
        return;
      }
      if (user === null) {
        res.status(401).send();
        return;
      }
      const payload = {
        user_id: user.id
      };
      jwt.sign(payload, JWT_SECRET, {
        algorithm: "HS256"
      }, (error, token) => {
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