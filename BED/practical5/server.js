const User = require("./models/User")

User.showFriends(1, (err, result) => {
    if(err) console.log(err);
    else console.log(result);
})