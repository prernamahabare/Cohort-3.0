const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const { auth, secretKey } = require("./auth")

mongoose.connect("mongodb+srv://prernamahabare:Prerna%401224@cluster0.njzyv.mongodb.net/MyDatabase")

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    try {
        const user = await UserModel.create({
            username: username,
            name: name,
            password: password
        })

        res.send({
            msg: "user Created Sucessfully",
            User: user
        })

    } catch (err) {
        console.log(err);
        res.status(403).send({
            msg: "SignUp Failed!"

        })
    }
})

app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const responce = await UserModel.findOne({
            username: username,
            password: password
        })

        if (responce) {
            const token = jwt.sign({
                id: responce._id.toString()
            }, secretKey)

            res.json({
                token: token
            })

        } else {
            res.status(403).msg({
                msg: "Invalid Credentials"
            })
        }

    } catch (err) {
        console.log(err);
        res.status(403).send({
            msg: "SignIn Failed!"

        })
    }
})

app.post("/createTodo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const descrption = req.body.descrption;
    const done = req.body.done;

    try {
        const todo = await TodoModel.create({
            userId: userId,
            title: title,
            descrption: descrption,
            done: done
        })

        res.json({
            msg: "Todo created Sucessfully!",
            Todo: todo
        })
    } catch (err) {
        console.log(err);
        res.status(403).send({
            msg: "Todo Creation Falied!"
        })
    }
})

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    try {
        const todos = await TodoModel.find({
            userId: userId
        })
        res.json({
            todos: todos.map(todo => ({
                id: todo._id,
                title: todo.title,
                description: todo.description,
                done: todo.done
            }))
        })
    } catch (err) {
        console.log(err);
        res.status(403).send({
            msg: "Some Err Occur while getting Todos"
        })
    }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})