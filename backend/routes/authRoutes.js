const express = require('express')
const router = require('express').Router()
const verifyOTP = require('../middlewares/verifyOtp')
const { signup, login } = require('../controllers/authController')
router.post('/signup',verifyOTP ,signup)
// router.post('/signup',signup)
router.post('/login', login)
module.exports = router
