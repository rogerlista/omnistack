const { Router } = require("express");

const devController = require("./controllers/dev-controller");
const searchController = require("./controllers/search-controller");

const routes = Router();

routes.get("/devs", devController.index);
routes.post("/devs", devController.store);

routes.get("/search", searchController.index);

module.exports = routes;
