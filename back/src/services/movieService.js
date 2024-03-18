const axios = require('axios')
const {Movies} = require('../types/Movies')


async function getFilms() {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    const movies = data.map((movies) => new Movies(movies));
    return response.data;
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
    getFilms
}