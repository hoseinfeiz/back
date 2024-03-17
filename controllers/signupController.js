const hash = require('../helper/hash')
const User = require('../models/User')
const { validationResult } = require('express-validator')
const get = (req, res) => {
    const flash = req.flash()
    res.render('signup', {
        flash,
        errors: [],
    })
}

const post = async (req, res) => {
    const flash = req.flash()
    const result = validationResult(req)
    console.log(result.errors)
    if (result.isEmpty()) {
        const userId = await User.insertMany({
            name: req.body.name,
            email: req.body.email,
            password: await hash.hashPassword(req.body.password),
            age: req.body.age,
            token: 'sdfgg',
        })
        const flash = req.flash()
        res.render('login', {
            flash,
        })
    } else {
        res.render('signup', {
            flash,
            errors: result.errors,
        })
    }
}

module.exports = {
    get,
    post,
}
