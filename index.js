const express = require('express')
const router = require('./routes')
const morgan = require('morgan')
const path = require('path')
const app = express()

const PORT = 3000

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('dev'))

app.use('/', router)

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
    console.log('server is running ...')
})
