const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')

router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router

// um router não deve conter as funções de direcionamento, apenas chamar as funcoes existentes no controller.