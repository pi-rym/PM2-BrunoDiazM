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

// handler.js
// const axios = require("axios");
// const renderCards = require("./renderCards");

// async function getFilms() {
//   try {
//     const response = await axios.get(
//       "https://students-api.up.railway.app/movies"
//     );
//     const films = response.data;
//     const allMoviesContainer = document.getElementById('allMovies');
//     if (allMoviesContainer) {
//       renderCards(films);
//     } else {
//       console.error("El contenedor 'allMovies' no se encontró en el DOM.");
//     }
//   } catch (error) {
//     console.error("Error al obtener las películas:", error);
//   }
// }

// module.exports = getFilms;

