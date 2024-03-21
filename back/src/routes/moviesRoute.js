const { Router } = require("express");
const { moviesController, postMovie } = require("../controllers/controller.js");

const moviesRoute = Router();

moviesRoute.get("/", moviesController);
moviesRoute.post("/", postMovie);

module.exports = moviesRoute;
