// export let watchedBtn = 0;
// export let queueBtn = null;
// import { getDataLocalStorage } from './pagination-library';
import nomovies from '../image/library-dek.jpg';
import noimage from '../image/No-Image-Placeholder.jpg';
// import { localStoragePagination } from './pagination-library';
// import { renderPagination } from './pagination-library';
let AllMovies = [];
// let queueMovies = [];

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
  // watchedBtn.classList.add('header-movie-btn--active');
  // queueBtn.classList.remove('header-movie-btn--active');
  // renderMoviesWatched();
}

initButtons();
// window.addEventListener('load', initButtons);

// document.addEventListener('DOMContentLoaded', () => {
//   if (window.location.href.indexOf('library.html') > -1) {
//     initButtons();
//   }
// });

const refs = {
  moviesDivEl: document.querySelector('.movies__container'),
  moviesListEl: document.querySelector('.movies__list'),
  btnWatched: document.querySelector('button[data-id="watched-btn"]'),
  btnQueue: document.querySelector('button[data-id="queue-btn"]'),
};

export function renderMoviesWatched() {
  AllMovies = JSON.parse(localStorage.getItem('movies in watched'));

  if (!AllMovies || AllMovies.length === 0) {
    refs.moviesListEl.innerHTML = `<div class="movies_not"><img class="" src="${nomovies}" alt="sorry no movies"/> </div>`;
    return;
  }
  const markupWatched = AllMovies.slice(0, 20)
    .map(movie => {
      let poster = movie.posterPath;
      if (
        movie.posterPath === 'https://image.tmdb.org/t/p/w500null' ||
        movie.posterPath ===
          'https://image.tmdb.org/t/p/w500/mNSqObjKszcxr55buQafQF9ARiC.jpg'
      ) {
        poster = noimage;
      }
      return `
		<li class="movies__item" data-movies="${movie.id}">
			<div class="movies__thumb">
			<img class="movies__img" src="${poster}" alt="${movie.title}"/>
			</div>
			<p class="movies__title">${movie.title}</p>
			<p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
		</li>
	`;
    })
    .join('');

  refs.moviesListEl.innerHTML = markupWatched;
  refs.btnWatched.addEventListener('click', renderMoviesWatched);
}

export function renderMoviesQueue() {
  AllMovies = JSON.parse(localStorage.getItem('movies in queue'));

  if (!AllMovies || AllMovies.length === 0) {
    refs.moviesListEl.innerHTML = `<div class="movies_not"><img class="" src="${nomovies}" alt="sorry no movies"/> </div>`;
    return;
  }

  const moviesHTML = AllMovies.slice(0, 20)
    .map(movie => {
      let poster = movie.posterPath;
      if (
        movie.posterPath === 'https://image.tmdb.org/t/p/w500null' ||
        movie.posterPath ===
          'https://image.tmdb.org/t/p/w500/mNSqObjKszcxr55buQafQF9ARiC.jpg'
      ) {
        poster = noimage;
      }
      return `
      <li class="movies__item" data-movies="${movie.id}">
        <div class="movies__thumb">
        <img class="movies__img" src="${poster}" alt="${movie.title}"/>
        </div>
        <p class="movies__title">${movie.title}</p>
        <p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
      </li>
    `;
    })
    .join('');

  refs.moviesListEl.innerHTML = moviesHTML;
  refs.btnQueue.addEventListener('click', renderMoviesQueue);
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    renderMoviesWatched();
  }
});
