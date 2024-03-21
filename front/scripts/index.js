const createMovie = require("./createMovie");
const getFilms = require("./handler");


document.addEventListener('DOMContentLoaded', () => {
    getFilms();
    const submit = document.getElementById("movieForm");
    submit?.addEventListener("submit", createMovie);
    console.log("Formulario para completar")
})

// const createMovie = require("./createMovie");
// const getFilms = require("./handler");

// document.addEventListener("DOMContentLoaded", () => {
//   getFilms();
//   const submit = document.getElementById("movieForm");
//   submit.addEventListener("submit", function (event) {
//     event.preventDefault(); // Previene el envío del formulario por defecto
//     createMovie(event); // Llama a la función createMovie
//   });
// });
