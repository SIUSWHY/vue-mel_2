const bcrypt = require('bcryptjs')

//bcrypt
async function cryptPassword(password) {
  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)
  return hash
}
module.exports = {
  cryptPassword
}
