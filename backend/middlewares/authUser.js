// const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const AuthModel = require('../models/authModel')
const asyncHandler = require('express-async-handler')
const authUser = asyncHandler(async (req, res, next) => {
  let token
  //   token = req.headers.authorization.split(' ')[1]
  //   // verify token
  //   console.log(token)
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET)
  //   console.log('hello')
  //   console.log(decoded)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      //   console.log('hello')
      //   console.log(decoded)
      req.user = await AuthModel.findOne({ email: decoded.id }).select(
        '-password'
      )
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized hello')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }

  next()
})
module.exports = { authUser }
