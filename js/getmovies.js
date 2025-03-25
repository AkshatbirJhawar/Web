const API_URL = "";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const formattedData = data.map(movies => [
      movies.movie_id,
      movies.title,
      movies.genre,
      movies.release_year
    ]);

    new gridjs.Grid({
      columns: ["Movie ID", "Title", "Genre", "Release Year"],
      data: formattedData,
      search: true,
      sort: true,
      pagination: {
        enabled: true,
        limit: 5
      },
      resizable: true,
      style: {
        table: {
          border: "1px solid #ccc",
        },
        th: {
          "backgroundColor": " #f4f4f4",
          "text-align": "left"
        },
        td: {
          "padding": "8px",
          "border-bottom": "1px solid #ddd"
        }
      }
    }).render(document.getElementById("grid-container"));
    })
  .catch(error => console.error("Error fetching data:", error));
