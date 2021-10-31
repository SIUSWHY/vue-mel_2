const mongoose = require('mongoose')

//User Schema
const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
})

const User = mongoose.model('User', UserSchema)

module.exports = User
