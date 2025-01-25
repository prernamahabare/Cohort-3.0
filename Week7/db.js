const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: { type: String, required: true, unique: true},
    name: String,
    password: { type: String, required: true }
})

const Todo = new Schema({
    userId:{ type: ObjectId, required: true },
    title: { type: String, required: true },
    description: String,
    done: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('Todos', Todo);

module.exports = {
    UserModel, 
    TodoModel
}