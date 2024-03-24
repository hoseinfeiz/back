const isLoggedIn = (req, res, next) => {
    if (!req.user) {
        req.flash('error', 'please logged in first')
        res.redirect('/login')
    }
    next()
}

const isLoggedOut = (req, res, next) => {
    if (req.user) {
        res.redirect('/')
    }
    next()
}

module.exports = {
    isLoggedIn,
    isLoggedOut,
}
