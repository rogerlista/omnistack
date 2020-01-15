const { Router } = require("express");

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: request.query (filtros, ordenação, paginação, ...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

routes.get("/users", (request, response) => {
  return response.json({ message: "Hello Omnistack" });
});

module.exports = routes;
