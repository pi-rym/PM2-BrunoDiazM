const movieService = require("../services/movieService");

module.exports = {
  moviesController: async (req, res) => {
    try {
      const response = await movieService.getFilms();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },

  postMovie: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      const savedMovie = await movieService.postMovie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      });
      res.status(201).json(savedMovie);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los datos",
        error: error.message,
      });
    }
  },
};

const Movie = require("../models/Movie");
