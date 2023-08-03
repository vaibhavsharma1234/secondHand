const grid = require('gridfs-stream')
const mongoose = require('mongoose')

let gfs, gridfsBucket
const conn = mongoose.connection
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'fs',
  })
  gfs = grid(conn.db, mongoose.mongo)
  gfs.collection('fs')
})
const url = 'https://secondhand-backend-website.onrender.com'

//i need an middleware for image conversion and uploading
const uploadImage = (request, response) => {
  if (!request.file) {
    return response.status(404).json({ msg: 'file not found' })
  }
  // return the file url;
  const imageUrl = `${url}/file/${request.file.filename}`
  return response.status(200).json(imageUrl)
}

const getImage = async (request, response) => {
  try {
    const file = await gfs.files.findOne({ filename: request.params.filename })
    // params mai se filename ayga as url mai filename pass h
    const readStream = gridfsBucket.openDownloadStream(file._id)
    // chunks passed in readstream
    readStream.pipe(response)
  } catch (error) {
    return response.status(500).json({ msg: error.message })
  }
}
module.exports = { uploadImage, getImage }
