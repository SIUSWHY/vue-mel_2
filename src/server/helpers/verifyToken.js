const jwt = require('jsonwebtoken')
const { JWT_KEY } = process.env

function verifyToken(req, res, next) {
  try {
    let token = req.headers.authorization.split(' ').pop()
    // console.log(token)

    // verify a token symmetric - synchronous
    let decoded = jwt.verify(token, JWT_KEY)

    req.user = decoded

    console.log(decoded) // bar
    next()
  } catch (error) {
    return res.status(403).send({
      errors: [error.message]
    })
  }
}

module.exports = {
  verifyToken
}
