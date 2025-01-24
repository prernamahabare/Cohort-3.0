const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: String,
    name: String,
    password: String
})

const Todo = new Schema({
    userId: ObjectId,
    title: String,
    descrption: String,
    done: Boolean,
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('Todos', Todo);

module.exports = {
    UserModel, 
    TodoModel
}