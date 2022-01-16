const db = require("./databaseConfig");

const Post = {

  // propagates a list of posts posted by a user
  // each post contains a "likers" property, which contains an array of users that liked the post.
  findByUserID: function (userID, callback) {


    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findByUserIDQuery =
          `
    SELECT * FROM post
    WHERE fk_poster_id = ?
    ORDER BY created_at DESC;
    `;
        dbConn.query(findByUserIDQuery, userID, (error, posts) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          }

          const postIDs = posts.map(post => post.id);

          Post.findLikersByPostIDs(postIDs, (error, likersByPostID) => {
            if (error) {
              callback(error, null);
              return;
            }

            for (let i = 0; i < posts.length; i++) {
              posts[i].likers = likersByPostID[posts[i].id];
            }

            callback(null, posts);
          });
        });
      }
    });
  },

  findByID: function (postID, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {

        const findByIDQuery =
          `
    SELECT * FROM post
    WHERE id = ?;
    `;
        dbConn.query(findByIDQuery, postID, (error, results) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            callback(null, null);
            return;
          }
          callback(null, results[0]);
        });
      }
    });
  },

  findAll: function (callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findAllQuery =
          `
    SELECT * FROM post;
    `;
        dbConn.query(findAllQuery, (error, results) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          }
          callback(null, results);
        });
      }
    });
  },

  insert: function (post, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const insertQuery =
          `
    INSERT INTO post (text_body, fk_poster_id)
    VALUES
    (?, ?);
    `;
        dbConn.query(insertQuery, [post.text_body, post.fk_poster_id], (error, results) => {
          dbConn.end()
          if (error) {
            callback(error, null);
            return;
          }
          callback(null, results.insertId);
        });
      }
    });
  },

  edit: function (postID, post, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const editPostQuery =
          `
    UPDATE post
    SET
    text_body = ?
    WHERE id = ?;
    `;
        dbConn.query(editPostQuery, [post.text_body, postID], (error, results) => {
          if (error) {
            callback(error);
            return;
          };
          callback(null, results);
        });
      }
    });
  },

  delete: function (postID, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {

        const deletePostQuery =
          `
    DELETE FROM post
    WHERE id = ?
    `;
        dbConn.query(deletePostQuery, postID, (error, results) => {
          dbConn.end();
          if (error) {
            callback(error,null);
            return;
          };
          callback(null,results);
        });
      }
    });
  },

  like: function (postID, likerID, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const likeQuery =
          `
    INSERT INTO likes
    (fk_user_id, fk_post_id)
    VALUES
    (?, ?);
    `;
        dbConn.query(likeQuery, [likerID, postID], (error, results) => {
          dbConn.end();
          if (error) {
            return callback(error, null);

          }
          return callback(null, results);
        });
      }
    });
  },

  unlike: function (postID, likerID, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const likeQuery =
          `
    DELETE FROM likes
    WHERE
    fk_user_id = ?
    AND
    fk_post_id = ?;
    `;
        dbConn.query(likeQuery, [likerID, postID], (error, results) => {
          if (error) {
            callback(error);
            return;
          }
          callback(null);
        });
      }
    });
  },

  findLikers: function (postID, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findLikersQuery =
          `

SELECT user.id, user.full_name, user.username, user.bio, user.date_of_birth, user.created_at FROM user, likes where likes.fk_user_id = user.id
and likes.fk_post_id = ?

    `;
        dbConn.query(findLikersQuery, postID, (error, results) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          }
          callback(null, results);
        });
      }
    });
  },

  // returns a object that maps post id to an array of likers of that post
  findLikersByPostIDs: function (postIDs, callback) {


    // we have to manually handle this edge case because
    // mysql doesn't allow empty lists.
    if (postIDs.length === 0) {
      process.nextTick(() => {
        callback(null, {});
      });
      return;
    }

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) {//database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findLikersQuery =
          `

SELECT user.id, user.full_name, user.username, user.bio, user.date_of_birth, user.created_at, likes.fk_post_id FROM user
INNER JOIN likes ON likes.fk_user_id = user.id
WHERE likes.fk_post_id IN (?);
    `;

        dbConn.query(findLikersQuery, [postIDs], (error, likers) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          }

          const likersByPostID = {};

          // initialize all post ids keys with an empty array
          for (let i = 0; i < postIDs.length; i++) {
            const postID = postIDs[i];
            likersByPostID[postID] = [];
          }

          for (let i = 0; i < likers.length; i++) {
            const liker = likers[i];
            likersByPostID[liker.fk_post_id].push(liker);
          }

          callback(null, likersByPostID);
        });
      }

    });
  }
}

module.exports = Post;