const aboutController = require('../controllers/aboutController')
const homepageController = require('../controllers/homepageController')
const express = require('express')
const router = express.Router()

router.get('/', homepageController)
router.get('/page/:id', homepageController)
router.get('/about', aboutController)

module.exports = router
