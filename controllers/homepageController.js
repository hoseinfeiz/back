const Category = require('../models/Category')
const Post = require('../models/Post')
const moment = require('moment')
const homepageController = async (req, res) => {
    const pageNum = req.params.id ? req.params.id : 1
    const offset = (pageNum - 1) * 10
    console.log('page number', pageNum)
    const cats = await Category.find({})
    const posts = await Post.find({})
        .limit(10)
        .skip(offset)
        .sort({ title: 1 })
        .lean()
    const postsCount = await Post.countDocuments({})
    const comments = posts.map((post) => ({
        ...post,
        created_at: moment(post.created_at).format('YYYY/MM/DD'),
    }))

    res.render('homepage', {
        category: cats,
        posts: comments,
        postsCount,
    })
}

module.exports = homepageController
