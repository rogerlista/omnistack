const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')

const app = express()

mongoose.connect('mongodb://localhost:27017/semana09', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333)
