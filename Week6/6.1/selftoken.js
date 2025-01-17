const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "HelloURMad";

app.use(express.json());

let users = [];

// User define token function.
function getRandomToken(){

    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = '';

    for(let i = 0; i < options.length; i++){
        token += options[Math.floor(Math.random() * options.length)]
    }

    return token;
}

app.post('/signup', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.send({
        msg: "You SignUp Sucessfully!"
    })
})

app.post('/signin', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const user = users.find((u) => (u.username == username && u.password == password));

    if (user) {
        // for user Define
        const token = getRandomToken();
        user.token = token;

        res.send({
            msg : "Your Token is as Follow:",
            token : token
        })

    } else {
        res.status(403).send({
            msg: "User not Found"
        })
    }
})

app.get('/me', function(req, res){
    const token = req.headers.token;

    // for user Define
    const user = users.find(u => u.token == token)

    if(user){
        res.send({
            msg:"User Found",
            username: user.username
        })
    }else{
        res.status(401).send({
            msg: "User not Found"
        })
    }
})

app.listen(3000, () => {
    console.log("server is log on port 3000")
})