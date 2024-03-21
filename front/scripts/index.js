const createMovie = require("./createMovie");
const getFilms = require("./handler");


document.addEventListener('DOMContentLoaded', () => {
    getFilms();
    const submit = document.getElementById("movieForm");
    submit?.addEventListener("submit", createMovie);
    console.log("Formulario para completar")
})

