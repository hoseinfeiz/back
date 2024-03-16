const passport = require('passport')
const get = (req, res) => {
    const flash = req.flash()
    res.render('login', {
        flash,
    })
}

const post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    session: true,
    failureFlash: true,
})

module.exports = {
    get,
    post,
}
