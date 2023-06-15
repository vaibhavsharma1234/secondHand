const express = require('express')
const router = require('express').Router()
const { authUser } = require('../middlewares/authUser')
const { upload, multerMiddleware } = require('../config/multer')
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
} = require('../controllers/adController')
router.post('/postad', authUser, upload, multerMiddleware, postAd)
router.get('/getads', getAds)
router.get('/getads/:id', getAd)
router.get('/myads', authUser, myads)
router.delete('/delete/:id', deleteAd)
router.put('/update/:id', authUser, updateAd)
router.post('/comment', authUser, postComment)
router.get('/comments/:id', getComments)
router.delete('/comment/delete/:id', authUser, deleteComment)
module.exports = router
