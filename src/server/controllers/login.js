const User = require('../models/modelUsers')
const bcrypt = require('bcryptjs')
const { createToken } = require('../helpers/createToken')

const loginContoller = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user === null) {
      throw new Error('Please regiter')
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid password')
    }

    const token = createToken({
      email: user.email,
      username: user.username,
      name: user.name
    })
    return res.send(token)
  } catch (error) {
    return (
      res.status(500).send({
        errors: [error.message]
      }),
      alert('Неправильно введен логин или пароль')
    )
  }
}

module.exports = loginContoller
