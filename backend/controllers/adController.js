const AdModel = require('../models/adModel')
const asyncHandler = require('express-async-handler')
const AuthModel = require('../models/authModel')
const commentModel = require('../models/commentModel')
const postAd = asyncHandler(async (req, res) => {
  console.log(req.body)
  const user = req.user
  const filenames = req.files.map((file) => file.filename)
  console.log(filenames)
  const { title, description, brand, location, price, category } = req.body

  if (
    !title ||
    !description ||
    !brand ||
    !req.files ||
    !location ||
    !price ||
    !category
  ) {
    res.status(400)
    throw new Error('Please include all fields')
  }
  const data = {
    title,
    description,
    brand,

    images: filenames,
    location,
    price,
    category,
    user: user._id,
  }

  const doc = new AdModel(data)
  await doc.save()

  if (doc) {
    res.json({ successMsg: 'Your ad has been published' })

    // add item to user array
    const updateUserItem = await AuthModel.findOneAndUpdate(
      { _id: doc.user._id },
      {
        $push: { ads: doc._id },
      }
    )
  } else {
    throw new Error('could not save your ad')
  }
})
const getAds = async (req, res) => {
  const ads = await AdModel.find({})
  if (!ads) {
    res.status(404)
    throw new Error('no ads to show')
  }
  res.status(200).json(ads)
}
const getAd = async (req, res) => {
  const id = req.params.id
  const ad = await AdModel.findOne({ _id: id }).populate({
    path: 'user',
    select: '-password',
  })
  if (!ad) {
    res.status(404)
    throw new Error('No item found')
  }

  res.status(200).json(ad)
}
const myads = async (req, res) => {
  const user = req.user
  const ads = await AdModel.find({ user: user.id }).select(
    'title price images createdAt description category brand location _id'
  )
  //  brand,
  // category,
  // location,
  // price,
  // title,
  // description,
  // images,
  // _id,

  if (!ads) {
    throw new Error('Something went wrong')
  }

  res.json(ads)
}
const deleteAd = async (req, res) => {
  AdModel.findByIdAndDelete(req.params.id)
    .then((ad) => {
      if (!ad) {
        return res.status(404).send()
      }
      res.send(ad)
    })
    .catch((error) => {
      res.status(500).send(error)
    })
}
const updateAd = async (req, res) => {
  const authUser = req.user
  const id = req.params.id
  const {
    title,
    description,
    brand,

    location,
    price,
    category,
  } = req.body

  // check if user is authorized to delete this ad
  const ad = await AdModel.findOne({ _id: id }).select('user')
  if (ad.user._id.toString() !== authUser.id) {
    res.status(401)
    throw new Error('Not authorized! cant update this ad')
  }
  const updatedAd = await AdModel.findByIdAndUpdate(
    id,
    {
      title,
      description,
      brand,

      location,
      price,
      category,
    },
    { new: true }
  )

  if (!updatedAd) {
    throw new Error('Something went wrong')
  }

  res.json({
    success: true,
    successMsg: 'Ad updated successfully',
    ad: updatedAd,
  })
}
const postComment = async (req, res) => {
  try {
    const newcomment = await new commentModel(req.body)
    newcomment.save()
    res.status(200).json({ msg: 'saved succesfully comment' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
const getComments = async (req, res) => {
  const authUser = req.user
  const id = req.params.id
  try {
    const comments = await commentModel.find({ postId: id })
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteComment = async (request, response) => {
  try {
    const id = request.params.id
    let res = await commentModel.findByIdAndDelete(id)
    return response.status(200).json('successfully deleted the commet')
  } catch (error) {
    return response.status(500).json({ error: error.message })
  }
}
module.exports = {
  postAd,
  getAds,
  getAd,
  myads,
  deleteAd,
  updateAd,
  postComment,
  getComments,
  deleteComment,
}
