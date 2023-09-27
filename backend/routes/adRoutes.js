const express = require('express')
const router = require('express').Router()
const { authUser } = require('../middlewares/authUser')
const { upload, multerMiddleware } = require('../config/multer')
const { upload1 } = require('../config/upload1')
const { uploadImage, getImage } = require('../controllers/imageController')
const {
  postAd,
  getAds,
  getAd,
  myads,
  deleteAd,
  updateAd,
  postComment,
  getComments,
  deleteComment,
  postCommentReply,
  deleteReply

} = require('../controllers/adController')
const {mailSend}=require('../controllers/mailController')
const {generateOTP}=require('../controllers/otpController')
router.post('/postad', authUser, upload, multerMiddleware, postAd)
router.get('/getads', getAds)
router.get('/getads/:id', getAd)
router.get('/file/:filename', getImage)
router.get('/myads', authUser, myads)
router.delete('/delete/:id', deleteAd)
router.put('/update/:id', authUser, updateAd)
router.post('/comment', authUser, postComment)
router.post('/file/upload', upload1.single('file'), uploadImage)
router.get('/comments/:id', getComments)
router.post('/comments/:commentId/replies',postCommentReply)
router.delete('/comment/delete/:id', authUser, deleteComment)
router.delete('/comment/delete/replies/:commentId/:id',deleteReply)
router.post('/otp/generate',generateOTP)
// mail send
router.post('/postmail',mailSend)
module.exports = router
