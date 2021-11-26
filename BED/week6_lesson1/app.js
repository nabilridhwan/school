let express = require("express")

let userDB = require("./userDB")

let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/users", (req, res) => {
    userDB.getAllUsers((err, user) => {
        if(err){
            res.status(500);
            res.send({
                "error": err
            })
        }else{
            res.status(200);
            res.send(user)
        }
    })
})

app.post("/users/add", (req, res) => {
    let {username, password, email, role} = req.body;
    userDB.insertUser(username, email, role, password, (err, user) => {
        if(err){
            res.status(500);
            res.send({
                "error": err
            })
        }else{
            res.status(200);
            res.send(user)
        }
    })
})


app.get("/users/:userid", (req, res) => {
    userDB.getUser(req.params.userid, (err, user) => {
        if(err){
            res.status(500);
            res.send({
                "error": err
            })
        }else{
            res.status(200);
            res.send(user)
        }
    })
})

app.put("/users/:userid", (req, res) => {

    let {email, password} = req.body;
    
    userDB.updateUser(req.params.userid, email, password, (err, user) => {
        if(err){
            res.status(500);
            res.send({
                "error": err
            })
        }else{
            res.status(200);
            res.send(user)
        }
    })
})

app.delete("/users/:userid", (req, res) => {

    userDB.deleteUser(req.params.userid, (err, user) => {
        if(err){
            res.status(500);
            res.send({
                "error": err
            })
        }else{
            res.status(200);
            res.send(user)
        }
    })
})

module.exports = app;