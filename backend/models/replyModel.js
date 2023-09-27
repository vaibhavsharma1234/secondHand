const mongoose = require('mongoose')
const { Schema } = mongoose
const replySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
})

const replyModel= mongoose.model('reply', replySchema)
module.exports={replyModel,replySchema}

// export default comment
