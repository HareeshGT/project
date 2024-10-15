const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWZjODMwZDExYzZhZDcyMzhhNDAzNWIzN2M1ODBmMyIsIm5iZiI6MTcyODk2NTUyNS4wMjg1MDEsInN1YiI6IjY3MGRlYWM1YjE1ZDk3YjFhOTNkNjRiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MkMXNOdAyLXWyBZy1C9c5aFEvtRP5fORITEHLbzsKLM'
  }
};

const KEY = "1afc830d11c6ad7238a4035b37c580f3";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getClassByRate = (vote) => {
  if (vote >= 7.5) return "green";
  else if (vote >= 7) return "orange";
  else return "red";
};

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    main.appendChild(movieElement);
  });
};

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

const authenticateAndFetchMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/authentication', options);
    const authData = await response.json();
    
    if (response.ok) {
      // Token is valid; now fetch movies
      await getMovies(API_URL);
    } else {
      console.error("Authentication failed:", authData);
    }
  } catch (error) {
    console.error("Error during authentication:", error);
  }
};

authenticateAndFetchMovies();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    history.go(0);
  }
});
