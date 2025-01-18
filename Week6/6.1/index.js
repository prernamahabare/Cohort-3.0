const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const secretKey = "HelloURMad";

app.use(express.json());

let users = [];

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

// try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in

function auth(req, res, next){
    const token = req.headers.token;

    if(token){
        jwt.verify(token, secretKey, function(err, data) {
            if(err){
                res.status(401).send({
                    message: "Some err occur Ctrl is in auth fN"
                })
            }else{
                req.user = data;
                console.log(req.user);
                next();
            }
        })
    }else{
        res.status(401).send({
            message: "Unauthorized access"
        })
    }

    
}
app.post('/signin', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    const user = users.find((u) => (u.username == username && u.password == password));

    if (user) {
        const token = jwt.sign({
            username : username
        }, secretKey);

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

app.get('/me', auth, function(req, res){
    const user = users.find(u => u.username === req.user.username);

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