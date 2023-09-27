const mongoose = require('mongoose')
const { Schema } = mongoose

const AdSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    image1: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    lat:{
      type: String,
    }
    ,
    long:{
      type: String,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Ads', AdSchema)
