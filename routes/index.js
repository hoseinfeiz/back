const aboutController = require('../controllers/aboutController')
const homepageController = require('../controllers/homepageController')
const express = require('express')
const searchController = require('../controllers/searchController')
const postpageController = require('../controllers/postpageController')
const router = express.Router()

router.get('/', homepageController)
router.get('/post/:id', postpageController)
router.get('/page/:id', homepageController)
router.get('/about', aboutController)
router.post('/search', searchController)

module.exports = router
