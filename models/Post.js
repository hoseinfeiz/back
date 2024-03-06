const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: String,
    description: String,
    image: String,
    category: String,
    created_at: Date,
})

const Post = mongoose.model('post', postSchema, 'post')

module.exports = Post
