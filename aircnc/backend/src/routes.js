const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const routes = express.Router()
const upload = multer(uploadConfig)

const sessionController = require('./controllers/session-controller')
const spotController = require('./controllers/spot-controller')
const dashboardController = require('./controllers/dashboard-controller')

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação, edição)

routes.post('/sessions', sessionController.store)

routes.get('/spots', spotController.index)
routes.post('/spots', upload.single('thumbnail'), spotController.store)

routes.get('/dashboard', dashboardController.show)

module.exports = routes
