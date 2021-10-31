const jwt = require('jsonwebtoken')
const { JWT_KEY } = process.env

function createToken(newUser) {
  const token = jwt.sign(newUser, JWT_KEY)
  return token
}

module.exports = {
  createToken
}
