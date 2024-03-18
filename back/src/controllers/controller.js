const movieService = require('../services/movieService')



const moviesController = async (req, res) => {

    try {
        const response = await movieService.getFilms();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message);
    }
 }

module.exports = moviesController