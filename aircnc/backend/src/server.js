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

io.on('connection', socket => {
  console.log('Usuário conectado', socket.id)
})

mongoose.connect('mongodb://localhost:27017/semana09', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())

app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

server.listen(3333)
