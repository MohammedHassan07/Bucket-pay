const {Schema, model} = require('mongoose')

const userSchema = new Schema({

    name: String,
    mobile: String,
    password: String

}, {timestamps: true})

const userModel = model('user', userSchema)

module.exports = userModel