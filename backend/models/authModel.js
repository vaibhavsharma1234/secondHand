const mongoose = require('mongoose')
const { Schema } = mongoose
const AuthSchema = new Schema(
  {
    fullname: {
      type: String,
      maxLength: 64,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
  },
  { timestamps: true }
)
module.exports = mongoose.model('User', AuthSchema)
// user bnado ek collection of schema authschema
