const isLoggedIn = (req, res, next) => {
    if (!req.user) {
        req.flash('warning', 'please first logged in first')
        res.redirect('/login', {})
    }
    next()
}

module.exports = {
    isLoggedIn,
}
