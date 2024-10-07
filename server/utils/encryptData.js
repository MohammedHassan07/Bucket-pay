const bcrypt = require('bcryptjs')

// function to hash the data
module.exports = async function hashData(data) {

    const HASH_SALT = process.env.HASH_SALT
    const hash = await bcrypt.hash(data, HASH_SALT)

    return hash
}
