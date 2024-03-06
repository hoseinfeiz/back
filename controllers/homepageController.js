const Category = require('../models/Category')
const Post = require('../models/Post')
const homepageController = async (req, res) => {
    const cats = await Category.find({})
    const posts = await Post.find({})
    res.render('homepage', {
        category: cats,
        posts,
    })
}

module.exports = homepageController
