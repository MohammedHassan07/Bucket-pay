const express = require('express')
const checkIsEmpty = require('../middlewares/isEmpty')
const checkIsUnique = require('../middlewares/isUniqueUser')
const decryptData = require('../middlewares/decryptData')
const { registerUser, loginUser } = require('../controller/user.controllers')

const route = express.Router()

route.post('/register', checkIsEmpty, checkIsUnique, registerUser)

route.post('/login', checkIsEmpty, decryptData, loginUser)

module.exports = route