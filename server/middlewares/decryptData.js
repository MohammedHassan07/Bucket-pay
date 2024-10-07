const bcrypt = require('bcryptjs')
const userModel = require('../models/user.model')

// function to dehash the data
module.exports = async function deHash(req, res, next) {

    const { mobile, password } = req.body

    const user = await userModel.findOne({ mobile })

    if (user.length !== 0) return res.status(402).json({ message: 'Invalid credintials' })

    await bcrypt.compare(password, user.password)

    next()
}