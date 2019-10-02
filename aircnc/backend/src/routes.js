const express = require('express')

const routes = express.Router()

const sessionController = require('./controllers/session-controller')

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação, edição)

routes.post('/sessions', sessionController.store)

module.exports = routes
