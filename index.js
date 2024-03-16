const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const path = require('path')
const mongodb = require('./configs/mongodb')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
require('./helper/auth')
const errorHandler = require('./helper/errorHandler')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))
app.use(
    session({
        secret: 'keyboard cat',
    })
)
app.use(passport.authenticate('session'))
app.use(flash())

app.use(express.json())
app.use(express.urlencoded())

app.use('/', router)

app.use(errorHandler.error404Handler)
app.use(errorHandler.error500Handler)

mongodb.connect()

app.listen(PORT, () => {
    console.log('server is running ...')
})
