const { body } = require('express-validator')
const aboutController = require('../controllers/aboutController')
const homepageController = require('../controllers/homepageController')
const express = require('express')
const searchController = require('../controllers/searchController')
const postpageController = require('../controllers/postpageController')
const loginController = require('../controllers/loginController')
const signupController = require('../controllers/signupController')
const dashboardController = require('../controllers/dashboardController')
const logoutController = require('../controllers/logoutController')
const { isLoggedIn, isLoggedOut } = require('../helper/loginCheck')

const router = express.Router()

router.get('/', homepageController)
router.get('/post/:id', postpageController)
router.get('/page/:id', homepageController)
router.get('/about', aboutController)
router.post('/search', searchController)
router.get('/login', isLoggedOut, loginController.get)
router.post('/login', loginController.post)
router.get('/signup', signupController.get)
router.post(
    '/signup',
    body('name').notEmpty(),
    body('password').isLength({ min: 6 }),
    signupController.post
)
router.get('/dashboard', isLoggedIn, dashboardController)

router.get('/logout', logoutController)

module.exports = router
