const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('../models/User')

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            session: false,
        },
        async (username, password, done) => {
            try {
                const user = await User.findOne({ email: username })
                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username or password.',
                    })
                }
                if (user.password !== password) {
                    return done(null, false, {
                        message: 'Incorrect password.',
                    })
                }
                return done(null, user, { message: 'correct user pass' })
            } catch (error) {
                done(error, {
                    message:
                        'unkown error for login occured please check your code',
                })
            }
        }
    )
)

passport.serializeUser((user, cb) => {
    process.nextTick(() => {
        cb(null, { id: user.id, username: user.username })
    })
})

passport.deserializeUser((user, cb) => {
    process.nextTick(() => {
        return cb(null, user)
    })
})
