const homepageController = (req, res) => {
    res.render('homepage', { message: 'salam jigare baba' })
}

module.exports = homepageController
