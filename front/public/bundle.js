(() => {
  var e = {
      989: (e) => {
        const t = document.getElementById("allMovies");
        e.exports = (e) => {
          e.forEach((e) => {
            const n = document.createElement("div");
            n.classList.add("card");
            const s = document.createElement("img");
            s.classList.add("card-image"),
              (s.src = e.poster),
              (s.alt = e.title);
            const a = document.createElement("div");
            a.classList.add("card-info"),
              (a.innerHTML = `\n    <h4 class="titulo">${e.title} (${
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
              n.appendChild(s),
              n.appendChild(a),
              t.appendChild(n);
          });
        };
      },
    },
    t = {};
  function n(s) {
    var a = t[s];
    if (void 0 !== a) return a.exports;
    var c = (t[s] = { exports: {} });
    return e[s](c, c.exports, n), c.exports;
  }
  (() => {
    const e = n(989);
    $.get("https://students-api.2.us-1.fl0.io/movies", (t) => {
      e(t);
    });
  })();
})();
