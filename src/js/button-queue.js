// export let watchedBtn = 0;
// export let queueBtn = null;
import nomovies from '../image/library-dek.jpg';

let watchedMovies = [];
let queueMovies = [];

export function initButtons() {
  watchedBtn = document.querySelector('button[data-id="watched-btn"]');
  queueBtn = document.querySelector('button[data-id="queue-btn"]');

  if (watchedBtn && queueBtn) {
    watchedBtn.addEventListener('click', () => {
      watchedBtn.classList.add('header-movie-btn--active');
      queueBtn.classList.remove('header-movie-btn--active');
      renderMoviesWatched();
    });

    queueBtn.addEventListener('click', () => {
      queueBtn.classList.add('header-movie-btn--active');
      watchedBtn.classList.remove('header-movie-btn--active');
      renderMoviesQueue();
    });
  }
  watchedBtn.classList.add('header-movie-btn--active');
  queueBtn.classList.remove('header-movie-btn--active');
  renderMoviesWatched();
}

window.addEventListener('load', initButtons);

const refs = {
  moviesDivEl: document.querySelector('.movies__container'),
  moviesListEl: document.querySelector('.movies__list'),
  btnWatched: document.querySelector('button[data-id="watched-btn"]'),
  btnQueue: document.querySelector('button[data-id="queue-btn"]'),
};

// refs.btnQueue.addEventListener('click', renderMoviesQueue);
// refs.btnWatched.addEventListener('click', renderMoviesWatched);

export function renderMoviesWatched() {
  watchedMovies = JSON.parse(localStorage.getItem('movies in watched'));

  if (!watchedMovies || watchedMovies.length === 0) {
    refs.moviesListEl.innerHTML = `<div class="movies_not"><img class="" src="${nomovies}" alt="sorry no movies"/> </div>`;
    return;
  }
  const markupWatched = watchedMovies
    .slice(0, 20)
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

  refs.moviesListEl.innerHTML = markupWatched;
}

export default function renderMoviesQueue() {
 queueMovies = JSON.parse(localStorage.getItem('movies in queue'));

  if (!queueMovies || queueMovies.length === 0) {
    refs.moviesListEl.innerHTML = `<div class="movies_not"><img class="" src="${nomovies}" alt="sorry no movies"/> </div>`;
    return;
  }

  const moviesHTML = queueMovies
    .slice(0, 20)
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

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    renderMoviesWatched();
  }
});


// const refs = {
//   moviesDivEl: document.querySelector('.movies__container'),
//   moviesListEl: document.querySelector('.movies__list'),
//   btnWatched: document.querySelector('[data-id="watched-btn"]'),
//   btnQueue: document.querySelector('[data-id="queue-btn"]'),
// };

// refs.btnQueue.addEventListener('click', renderMoviesQueue);
// refs.btnWatched.addEventListener('click', renderMoviesWatched);

// export function renderMoviesQueue() {
//   const queueMovies = JSON.parse(localStorage.getItem('movies in queue'));

//   if (!queueMovies || queueMovies.length === 0) {
//     refs.moviesListEl.innerHTML = '<p>No movies in queue</p>';
//     return;
//   }
//   const moviesHTML = queueMovies
//     .map(movie => {
//       return `
//        <li class="movies__item" data-movies="${movie.id}">
//         <div class="movies__thumb">
//          <img class="movies__img" src="${movie.posterPath}" alt="${movie.title}"/>
//         </div>
//          <p class="movies__title">${movie.title}</p>
//         <p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
//       </li>
//     `;
//     })
//     .join('');

//   refs.moviesListEl.innerHTML = moviesHTML;
// }

// function renderMoviesWatched() {
//   const watchedMovies = JSON.parse(localStorage.getItem('movies in watched'));

//   if (!watchedMovies || watchedMovies.length === 0) {
//     refs.moviesListEl.innerHTML = '<p>No movies in watch</p>';
//     return;
//   }
//   const markupWatched = watchedMovies
//     .map(movie => {
//       return `
//        <li class="movies__item" data-movies="${movie.id}">
//         <div class="movies__thumb">
//          <img class="movies__img" src="${movie.posterPath}" alt="${movie.title}"/>
//         </div>
//          <p class="movies__title">${movie.title}</p>
//         <p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
//       </li>
//     `;
//     })
//     .join('');

//   refs.moviesListEl.innerHTML = markupWatched;
// }
