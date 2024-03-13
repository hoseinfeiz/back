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
    session: false,
    failureFlash: true,
})

module.exports = {
    get,
    post,
}
