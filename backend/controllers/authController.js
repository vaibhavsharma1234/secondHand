const asyncHandler = require('express-async-handler')
const authModel = require('../models/authModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const signup = asyncHandler(async (req, res) => {
  console.log(req.body)
  const { fullname, email, password } = req.body
  if (!fullname || !email || !password) {
    res.status(400)
    throw new Error('please include all fields ')
    // throw
  }
  //lets create model now for user
  //   res.status(200).json({ signup: 'suceessfull' })
  // now check whether email exist or not
  const emailExist = await authModel.findOne({ email })
  if (emailExist) {
    res.status(400)
    throw new Error('Email already exists')
  }
  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create a user

  const user = new authModel({
    fullname,
    email,
    password: hashedPassword,
  })
  await user.save()
  if (user) {
    res.status(201).json({
      user: {
        _id: user.id,
        name: user.fullname,
        email: user.email,
        token: generateToken(user.email),
        success: 'true',
        signup: 'sucessful',
        data: user,
      },
      success: 'true',
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
  // if (!user) {
  //   throw new Error('something went wrong')
  // }
  // res.status(201).json({ success: 'true', signup: 'sucessful', data: user })
})
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  console.log(email, password)
  // i have to check ki user registed hai ya nhi
  // agar nhi gai toh error do
  if (!email || !password) {
    res.status(400)
    throw new Error('please include all fields')
  }
  const user = await authModel.findOne({ email })
  if (!user) {
    res.status(400)
    throw new Error('user does not exist')
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      user: {
        _id: user.id,
        email: user.email,
        token: generateToken(user.email),
        signin: 'suceess',
        success: true,
        data: user,
      },
      token: generateToken(user.email),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
  // res.status(200).json({ signin: 'suceess', success: true })
  // implement jwt authentication to this form
})

//// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
module.exports = {
  signup,
  login,
}
