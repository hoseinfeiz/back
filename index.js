const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const path = require('path')
const mongodb = require('./configs/mongodb')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/User')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))

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
                return done(null, user)
            } catch (error) {
                done(error)
            }
        }
    )
)

app.use(express.json())
app.use(express.urlencoded())

app.use('/', router)

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

mongodb.connect()

app.listen(PORT, () => {
    console.log('server is running ...')
})
