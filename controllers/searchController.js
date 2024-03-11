const Category = require('../models/Category')
const Post = require('../models/Post')
const moment = require('moment')
const searchController = async (req, res) => {
    const catsFilter = req.query.cats
    const pageNum = req.params.id ? req.params.id : 1
    const offset = (pageNum - 1) * 10
    const cats = await Category.find({})
    const posts = catsFilter
        ? await Post.find({
              category: { $in: [catsFilter] },
              title: { $regex: '.*' + req.body.search + '.*' },
          })
              .limit(10)
              .skip(offset)
              .sort({ title: 1 })
              .lean()
        : await Post.find({ title: { $regex: '.*' + req.body.search + '.*' } })
              .limit(10)
              .skip(offset)
              .sort({ title: 1 })
              .lean()
    const postsCount = catsFilter
        ? await Post.countDocuments({
              category: { $in: [catsFilter] },
              title: { $regex: '.*' + req.body.search + '.*' },
          })
        : await Post.countDocuments({
              title: { $regex: '.*' + req.body.search + '.*' },
          })
    const comments = posts.map((post) => ({
        ...post,
        created_at: moment(post.created_at).format('YYYY/MM/DD'),
    }))
    console.log('postCountsss', postsCount)
    res.render('homepage', {
        category: cats,
        posts: comments,
        postsCount,
        catsFilter,
    })
}

module.exports = searchController
