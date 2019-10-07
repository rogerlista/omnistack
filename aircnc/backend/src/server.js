const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const socketIo = require('socket.io')
const http = require('http')

const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socketIo(server)

const connectedUsers = {}

mongoose.connect('mongodb://localhost:27017/semana09', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

io.on('connection', socket => {
  const { user_id } = socket.handshake.query

  connectedUsers[user_id] = socket.id
})

app.use((req, res, next) => {
  req.io = io
  req.connectedUsers = connectedUsers

  return next()
})

app.use(cors())
app.use(express.json())

app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

server.listen(3333)
