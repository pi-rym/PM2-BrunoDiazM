const axios = require('axios')
const {Movies} = require('../types/class')


async function getFilms() {
  try {
    const {data} = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    const movies = data.map((movies) => new Movies(movies));
    return movies;
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
    getFilms
}