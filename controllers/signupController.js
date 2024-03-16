const hash = require('../helper/hash')
const User = require('../models/User')

const get = (req, res) => {
    const flash = req.flash()
    res.render('signup', {
        flash,
    })
}

const post = async (req, res) => {
    const userId = await User.insertMany({
        name: req.body.name,
        email: req.body.email,
        password: hash.hashPassword(req.body.password),
        age: req.body.age,
        token: 'sdfgg',
    })
    console.log(userId)
    const flash = req.flash()
    res.render('login', {
        flash,
    })
}

module.exports = {
    get,
    post,
}
