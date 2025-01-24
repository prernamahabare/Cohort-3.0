const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());

const myPrivateKey = "helloiLoveU"

const users = [];

function auth(req, res, next) {
    const token = req.headers.token;

    if (token) {
        jwt.verify(token, myPrivateKey, function (err, data) {
            if (err) {
                res.status(401).send({
                    message: "Some err occur Ctrl is in auth fN"
                })
            } else {
                // Modifine req object insert new field user where all data comes from frontend/res is stores.
                // if not this then all data store into body and need to access it using req.body.username
                // now access it like req.user.username
                req.user = data;
                // console.log(req.user);
                next();
            }
        })
    } else {
        res.status(401).send({
            message: "Unauthorized access! Plz enter Valid token"
        })
    }
}

app.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.send({
        msg: "User Signup Sucessfully!",
        username: username
    })
})

app.post('/signin', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ username: username }, myPrivateKey);
        res.send({
            msg: "Your Token is as Follow:",
            token: token
        })
    } else {
        res.status(403).send({
            msg: "User Not Found!"
        })
    }

})

app.get('/me', auth, function (req, res) {
    const user = users.find(u => u.username === req.user.username);

    if (user) {
        if (user.todosArr) {
            const titles = user.todosArr.map(todo => todo.title)
            res.send({
                msg: "User Found",
                username: user.username,
                todos: titles
            })
        }
        res.send({
            msg: "User Found",
            username: user.username
        })
    } else {
        res.status(401).send({
            msg: "User not Found"
        })
    }

})

let count = 0;

app.post('/createTodo', auth, function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    // console.log(users);

    const user = users.find(u => u.username === req.user.username)

    if (!user) {
        console.error("User not found in users array:", username);
        return res.status(404).send({ msg: "User not found" });
    }

    if (!user.todosArr) {
        user.todosArr = [];
    }

    const newTodo = {
        id: count + 1,
        title: title,
        description: description,
        createdAt: new Date()
    }

    user.todosArr.push(newTodo);
    count = count + 1;
    // console.log(user.todoArr);

    res.send({
        msg: "Todo Created SucessFully!",
        todo: newTodo
    })

})

app.get('/todos', auth, function (req, res) {

    const user = users.find(u => u.username === req.user.username);

    if (user && user.todosArr) {
        const todos = user.todosArr.map(
            todo => ({
                id: todo.id,
                title: todo.title,
                description: todo.description
            })
        )
        res.send({
            msg: "Todo Fecth Successfully!",
            todos: todos
        })
    } else {
        res.status(401).send({
            msg: "Todos not found!",
        })
    }


})

app.post('/updateTodo', auth, function (req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const description = req.body.description;

    const user = users.find(u => u.username === req.user.username);

    console.log("user", user.todosArr)

    if (user && user.todosArr) {
        const currTodo = user.todosArr.find(u => u.id === id);
        console.log(currTodo)

        if (currTodo) {
            currTodo.title = title || currTodo.title;
            currTodo.description = description || currTodo.description;

            res.send({
                msg: "Todo updated Sucessfully!",
                updatedTodo: currTodo
            })
        } else {
            res.status(404).send({
                msg: "Todo not found"
            })
        }
    } else {
        // console.error("User not found or Todo not found");
        return res.status(404).send({ msg: "User not found or Todo not found" });
    }
})

app.delete('/deleteTodo', auth, function (req, res) {
    const todoId = req.body.id;
    const user = users.find(u => u.username === req.user.username);
    console.log(user)

    if (!user) {
        return res.status(404).send({
            msg: "User not found"
        });
    }

    if (!user.todosArr || !Array.isArray(user.todosArr)) {
        return res.status(404).send({
            msg: "No todos available for the user"
        });
    }
    const todoIndex = user.todosArr.find(todo => todo.id === todoId);
    console.log(todoIndex)

    if (todoIndex) {
        user.todosArr = user.todosArr.filter(todo => todo.id !== todoId);

        res.send({
            msg: "Todo Delete Sucessfully!",
        })
    } else {
        res.status(404).send({
            msg: "Todo not found"
        })
    }

})


app.listen('3000', () => {
    console.log("Server is listening on port 3000")
})