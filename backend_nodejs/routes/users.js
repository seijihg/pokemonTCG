const express = require('express')
const router = express.Router()
const usersController = require('../controller/users')

router.post('/users', usersController.postUser)

module.exports = router