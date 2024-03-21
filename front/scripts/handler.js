const axios = require("axios");
const renderCards = require("./renderCards");

async function getFilms() {
  try {
    const response = await axios.get("http://localhost:3000/movies");
    renderCards(response.data);
  } catch (error) {
    console.error("Error al obtener las películas:", error);
  }
}


module.exports = getFilms;

