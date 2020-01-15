const { Router } = require("express");
const devController = require("./controllers/dev-controller");

const routes = Router();

routes.post("/devs", devController.store);

module.exports = routes;
