const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod");
const { UserModel, TodoModel } = require("./db");
const { auth, secretKey } = require("./auth")

mongoose.connect("mongodb+srv://prernamahabare:Prerna%401224@cluster0.njzyv.mongodb.net/MyDatabase")

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    if (!email || !name || !password) {
        return res.status(400).send({
            msg: "All fields (email, name, password) are required!"
        });
    }

    try {
        const encryptedpassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            email: email,
            name: name,
            password: encryptedpassword
        })

        res.send({
            msg: "user Created Sucessfully",
            User: user
        })

    } catch (err) {
        if (err.code === 11000) {
            // Handle duplicate email error
            return res.status(409).send({
                msg: "Email already exists!"
            });
        }

        console.log(err);
        res.status(403).send({
            msg: "SignUp Failed!"

        })
    }
})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await UserModel.findOne({
            email: email
        })

        if (!user) {
            return res.status(404).send({ msg: "User Not found!" });
        }

        const decrptyPassword = await bcrypt.compare(password, user.password);

        if (!decrptyPassword) {
            return res.status(401).send({ msg: "Invalid email or password!" });
        }

        if (user) {
            const token = jwt.sign({
                id: user._id.toString()
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
    const description = req.body.description;
    const done = req.body.done;

    try {
        const todo = await TodoModel.create({
            userId: userId,
            title: title,
            description: description,
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