const mongoose = require('mongoose')

const CardsSchema = mongoose.Schema({
  title: String,
  text: String,
  img: String,
  viewCount: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  },
  newDate: String
})

const Cards = mongoose.model('card', CardsSchema)

module.exports = Cards
