const userModel = require("../models/user.model")
const hashData = require("../utils/encryptData")
const jwt = require('jsonwebtoken')

// function to register user
async function registerUser(req, res) {

    try {

        const { name, mobile, password } = req.body

        const hash = await hashData(password)

        const newUser = new userModel({ name, mobile, password: hash })

        const savedUser = await newUser.save()

        if (!savedUser) return res.status(500).json({ message: 'User not registered, Try after sometimes' })

        return res.status(201).json({ message: 'User registered successfully' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

// function to login user
async function loginUser(req, res) {

    try {

        const { mobile } = req.body

        const ACCESS_TOKEN = process.env.ACCESS_TOKEN

        const token = jwt.sign(mobile, ACCESS_TOKEN)

        if (!token) return res.status(500), json({ message: 'Something went wrong, try after sometimes' })

        return res.status(200).send()

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
}

module.exports = {

    registerUser,
    loginUser
}