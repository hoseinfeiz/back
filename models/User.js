const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: Number,
    token: String,
})

const User = mongoose.model('user', userSchema, 'user')

module.exports = User
