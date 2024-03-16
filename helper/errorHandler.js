const error404Handler = (req, res, next) => {
    res.status(404).send("Sorry can't find that!")
}

const error500Handler = (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
}

module.exports = {
    error404Handler,
    error500Handler,
}
