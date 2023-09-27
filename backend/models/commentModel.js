const mongoose = require('mongoose')
const { Schema } = mongoose
const {replySchema}=require('./replyModel')
const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  replies: [replySchema]
})

module.exports = mongoose.model('comment', commentSchema)
// export default comment
