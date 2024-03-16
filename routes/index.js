const aboutController = require('../controllers/aboutController')
const homepageController = require('../controllers/homepageController')
const express = require('express')
const searchController = require('../controllers/searchController')
const postpageController = require('../controllers/postpageController')
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')

const router = express.Router()

router.get('/', homepageController)
router.get('/post/:id', postpageController)
router.get('/page/:id', homepageController)
router.get('/about', aboutController)
router.post('/search', searchController)
router.get('/login', loginController.get)
router.post('/login', loginController.post)
router.get('/signup', signupController.get)
router.post('/signup', signupController.post)

module.exports = router
