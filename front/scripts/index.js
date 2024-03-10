const allMoviesSection = document.getElementById("allMovies");

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
  renderCards(data);
});

const renderCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("card-image");
    image.src = movie.poster;
    image.alt = movie.title;

    const info = document.createElement("div");
    info.classList.add("card-info");
    info.innerHTML = `
    <h4 class="titulo">${movie.title} (${movie.year})</h4>
    <p class="director">${movie.director}</p>
    <p class="duracion">${movie.duration}</p>
    <p class="genero">${movie.genre.join(", ")}</p>
    <p class="calificacion">Calificacion: ${movie.rate}</p>
  `;

    card.appendChild(image);
    card.appendChild(info);
    allMoviesSection.appendChild(card);
  });
};
