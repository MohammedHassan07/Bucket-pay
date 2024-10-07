const userModel = require('../models/user.model')

// function to check the user is not present in the database (unique mobile number)
module.exports = async function checkUnique(req, res, next) {

    const { mobile } = req.body

    const user = await userModel.find({ mobile })

    if (user.lenght !== 0) return res.status(400).json({ message: `User is already present with ${mobile}` })

    next()
} 