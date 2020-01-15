const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://juca:minhasenha@cluster0-k6gcz.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: request.query (filtros, ordenação, paginação, ...)
// Route params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen("3333");
