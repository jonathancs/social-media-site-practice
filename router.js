const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')

router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)

// post related routes

router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen)



module.exports = router

// um router não deve conter as funções de direcionamento, apenas chamar as funcoes existentes no controller.