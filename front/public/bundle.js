(() => {
  var e = {
      989: (e) => {
        const t = document.getElementById("allMovies");
        e.exports = (e) => {
          e.forEach((e) => {
            const a = document.createElement("div");
            a.classList.add("card");
            const n = document.createElement("img");
            n.classList.add("card-image"),
              (n.src = e.poster),
              (n.alt = e.title);
            const s = document.createElement("div");
            s.classList.add("card-info"),
              (s.innerHTML = `\n    <h4 class="titulo">${e.title} (${
                e.year
              })</h4>\n    <p class="director">${
                e.director
              }</p>\n    <p class="duracion">${
                e.duration
              }</p>\n    <p class="genero">${e.genre.join(
                ", "
              )}</p>\n    <p class="calificacion">Calificacion: ${
                e.rate
              }</p>\n  `),
              a.appendChild(n),
              a.appendChild(s),
              t.appendChild(a);
          });
        };
      },
    },
    t = {};
  function a(n) {
    var s = t[n];
    if (void 0 !== s) return s.exports;
    var c = (t[n] = { exports: {} });
    return e[n](c, c.exports, a), c.exports;
  }
  (() => {
    const e = a(989);
    $.get("https://students-api.up.railway.app/movies", (t) => {
      e(t);
    });
  })();
})();
