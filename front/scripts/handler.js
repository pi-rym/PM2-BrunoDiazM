const axios = require("axios");
const renderCards = require("./renderCards");

async function getFilms() {
  try {
    const response = await axios.get(
      "https://students-api.up.railway.app/movies"
    );
    renderCards(response.data);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
}

module.exports = getFilms;
