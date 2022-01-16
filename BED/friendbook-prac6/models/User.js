const db = require("./databaseConfig");

const User = {
  findByID: function (userID, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findUserByIDQuery = "SELECT id, full_name, username, bio, date_of_birth, created_at FROM user WHERE id = ?;";
        dbConn.query(findUserByIDQuery, [userID], (error, results) => {
          dbConn.end();
          if (error) {
            callback(error, null);
            return;
          };
          // pass null as value if there is no user.
          if (results.length === 0) {
            callback(null, null);
            return;
          };
          callback(null, results[0]);
        });
      }
    });

  },
  findAll: function (callback) {


    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const findAllUsersQuery = "SELECT id, full_name, username, bio, date_of_birth, created_at FROM user;";
        dbConn.query(findAllUsersQuery, (error, results) => {
          if (error) {
            callback(error, null);
            return;
          };
          callback(null, results);
        });
      }
    });
  },
  insert: function (user, callback) {
    const insertUserQuery =
      `
        INSERT INTO user (username, full_name, bio, date_of_birth)
        VALUES (?, ?, ?, ?);
        `;
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {

        dbConn.query(
          insertUserQuery,
          [user.username, user.full_name, user.bio, user.date_of_birth],
          (error, results) => {
            dbConn.end();
            if (error) {
              callback(error, null);
              return;
            };
            callback(null, results.insertId);
          });
      }
    });
  },
  edit: function (userID, user, callback) {
    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {
        const editUserQuery =
          `
        UPDATE user
        SET
          full_name = ?,
          username = ?,
          bio = ?,
          date_of_birth = ?
        WHERE id = ?
        `;
        dbConn.query(editUserQuery, [user.full_name, user.username, user.bio, user.date_of_birth, userID], (error, results) => {
          if (error) {
            callback(error);
            return;
          };
          callback(null);
        });
      }
    });
  },
  addFriend: function (userIDOne, userIDTwo, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        //console.log(err);
        return callback(err);
      } else {

        const addFriendQuery =
          `
      INSERT INTO friendship (fk_friend_one_id, fk_friend_two_id)
      VALUES (?, ?);
      `;

        dbConn.query(addFriendQuery, [userIDOne, userIDTwo], function (error, results) {

          if (error) {
            return callback(error);

          }
          dbConn.query(addFriendQuery, [userIDTwo, userIDOne], function (error, results) {
            dbConn.end();
            return callback(error);
          });
        });
      }
    });
  },
  removeFriend: function (userIDOne, userIDTwo, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        //console.log(err);
        return callback(err);
      } else {
        var removeFriendQuery =
          `
      DELETE FROM friendship
      WHERE fk_friend_one_id = ?
      AND fk_friend_two_id = ?;
      `;
        dbConn.query(removeFriendQuery, [userIDOne, userIDTwo], function (err, results) {
          if (err) {

            return callback(err);

          }
          dbConn.query(removeFriendQuery, [userIDTwo, userIDOne], function (err, results) {
            dbConn.end();

            return callback(err);
          });
        });
      }
    });
  },
  showFriends: function (userID, callback) {

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {

        const showFriendsQuery =
          `

SELECT user.id, user.full_name, user.username, user.bio, user.date_of_birth, user.created_at
FROM user
INNER JOIN friendship
ON user.id = friendship.fk_friend_one_id
WHERE friendship.fk_friend_two_id = ?;

      `;
        dbConn.query(showFriendsQuery, [userID], function (err, results) {
          dbConn.end();

          return callback(err, results);
        });
      }

    });
  },

  verify: function (credentialsObj, callback) {

    const {
      username,
      password
    } = credentialsObj;

    var dbConn = db.getConnection();
    dbConn.connect(function (err) {

      if (err) { //database connection gt issue!

        console.log(err);
        return callback(err, null);
      } else {

        const query = "SELECT * FROM user WHERE username=? and password=?";

        dbConn.query(query, [username, password], (error, results) => {
          if (error) {
            callback(error, null);
            return;
          }
          if (results.length === 0) {
            return callback(null, null);

          } else {
            const user = results[0];
            return callback(null, user);
          }
        });
      }
    });
  },

}

module.exports = User;