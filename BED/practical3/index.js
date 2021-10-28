let express = require("express")
let app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

app.delete("/user/:id", (req, res) => {
    let {
        id
    } = req.params;

    res.status(200).send({
        "message": `User with ${id} has been successfully deleted!`
    })
})

app.put("/user/:id", (req, res) => {
    let {
        id
    } = req.params;
    let {email} = req.body;
    res.status(200).send(`User with ${id} has been successfully updated with new email ${email}!`)
})

app.listen(8081, () => {
    console.log("Server is running on port 8081");
})