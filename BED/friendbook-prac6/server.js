const app = require("./controller/app");
const userDB = require("./models/User");

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

/*
user.findByID(1, (error, user) => {
  if (error) {
    console.log(error
      );
    return;
  };
  console.log(user);
});
*/

/*
user.showFriends(1,function(err,results){

  if (err) {
    console.log(err);
    return;
  };
  console.log("Friends of 1:")
  console.log(results);

}


userDB.addFriend(2,3,function(err){

  console.log(err);
});


userDB.removeFriend(2,3,function(err){

  console.log(err);
});



userDB.showFriends(2,function(err,results){

  if(err){
    console.log(err);
  }else{
    console.log(results);
  }
});

*/