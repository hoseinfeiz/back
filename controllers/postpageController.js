const Post = require('../models/Post')

const postpageController = async (req, res) => {
    const currentPost = await Post.findById(req.params.id)
    console.log(currentPost)
    res.render('postpage', {
        post: currentPost,
    })
}

module.exports = postpageController
