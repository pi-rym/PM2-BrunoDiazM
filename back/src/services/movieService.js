const axios = require('axios')
const {Movies} = require('../types/class')
const Movie = require('../models/Movie')

module.exports = {
  async getFilms() {
      const allMovies = await Movie.find();
      return allMovies;
  },
  
  postMovie: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
    
  },
};