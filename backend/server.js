const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const connection = require('../backend/config/db')
const cors = require('cors')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
connection()
// app.use('/api',)
app.use('/api/auth', require('../backend/routes/authRoutes'))
app.use('/api', require('../backend/routes/adRoutes'))
app.get('/home', (req, res) => {
  res.json({
    name: 'vaibhav2',
    roll: 34,
  })
})

const port = process.env.PORT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
} else {
  app.get('*', (req, res) => {
    res.send('haha')
  })
}
app.listen(port || 8000, () =>
  console.log(`Server is running successfully on PORT ${port}`)
)
