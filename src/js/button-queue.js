
const refs = {
  moviesDivEl: document.querySelector('.movies__container'),
  moviesListEl: document.querySelector('.movies__list'),
  btnWatched: document.querySelector('[data-id="watched-btn"]'),
  btnQueue: document.querySelector('[data-id="queue-btn"]'),  
};

refs.btnQueue.addEventListener('click', renderMoviesQueue);
// refs.btnWatched.addEventListener('click', renderMoviesWatched);

export function renderMoviesQueue() {
  const queueMovies = JSON.parse(localStorage.getItem('movies in queue'));
  console.log(queueMovies);

  if (!queueMovies || queueMovies.length === 0) {
    refs.moviesListEl.innerHTML = '<p>No movies in queue</p>';
    return;
  }
  const moviesHTML = queueMovies
    .map(movie => {
      return `
       <li class="movies__item" data-movies="${movie.id}">
        <div class="movies__thumb">
         <img class="movies__img" src="${movie.posterPath}" alt="${movie.title}"/>
        </div>
         <p class="movies__title">${movie.title}</p>
        <p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
      </li>
    `;
    })
    .join('');

  refs.moviesListEl.innerHTML = moviesHTML;
}

