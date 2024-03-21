const axios = require("axios");

function validateForm({
  title, year, director, duration, genre, rate, poster,
}) {
  if (!title || !year || !director || !duration || !genre[0] || !rate || !poster)
    return "Todos los campos son obligatorios.";
  if (director.length < 5 || director.length > 30)
    return "Director debe contener entre 5 y 30 caracteres.";
  if (isNaN(rate) || parseFloat(rate) < 1 || parseFloat(rate) > 10)
    return "El rating debe ser un número entre 1 y 10.";
  return null;
}

function clearFormInputs() {
  const inputs = document.querySelectorAll(
    'input[type="text"], input[type="number"]'
  );
  inputs.forEach((input) => (input.value = ""));
}
document.addEventListener("DOMContentLoaded", function () {
  const cleanerButton = document.getElementById("btnCleaner");
  cleanerButton.addEventListener("click", clearFormInputs);
});


function createMovie(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const year = document.getElementById("year").value;
  const director = document.getElementById("director").value;
  const duration = document.getElementById("duration").value;
  const genre = document.getElementById("genre").value.split(" ");
  const rate = parseFloat(document.getElementById("rate").value);
  const poster = document.getElementById("poster").value;


  const newMovie = { title, year, director, duration, genre, rate, poster };


  const error = validateForm(newMovie);
  if (error) return alert(error);

  // return alert('Datos correctos');

  axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => {
      alert("Pelicula agregada.");
      clearFormInputs(); 
    })
    .catch((error) => alert("Error al crear la pelicula."));

}

module.exports = createMovie;
