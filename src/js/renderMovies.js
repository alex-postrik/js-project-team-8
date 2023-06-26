import noimage from '../image/No-Image-Placeholder.jpg';
import nomovies from '../image/library-dek.jpg';
import {
  localStoragePagination,
  paginationLibraryRef,
  renderPagination,
} from './pagination-library';
import { KEY_QUEUE, KEY_WATCHED, LIMIT } from './variable';

export let dataArray = [];
const moviesListElRef = document.querySelector('.movies__list');

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    initButton();
  }
});

export const loadData = key => {
  try {
    const dataFromLocalStorage = localStorage.getItem(key);
    return dataFromLocalStorage === null
      ? []
      : (dataArray = JSON.parse(dataFromLocalStorage));
  } catch (error) {
    console.log(error.message);
  }
};

function initButton() {
  let watchedBtn = document.querySelector('button[data-id="watched-btn"]');
  let queueBtn = document.querySelector('button[data-id="queue-btn"]');

  watchedBtn.addEventListener('click', () => {
    watchedBtn.classList.add('header-movie-btn--active');
    queueBtn.classList.remove('header-movie-btn--active');
    localStoragePagination.resetPage();
    loadData(KEY_WATCHED);
    renderPagination();
    сutData();
  });

  queueBtn.addEventListener('click', () => {
    queueBtn.classList.add('header-movie-btn--active');
    watchedBtn.classList.remove('header-movie-btn--active');
    localStoragePagination.resetPage();
    loadData(KEY_QUEUE);
    renderPagination();
    сutData();
  });
  loadData(KEY_WATCHED);
  renderPagination();
  сutData();
}

export function сutData() {
  let beginGet = LIMIT * (localStoragePagination.currentPage - 1);
  let endGet = LIMIT + beginGet;

  if (!dataArray || dataArray.length === 0) {
    moviesListElRef.innerHTML = `<li><p>You don't have any saved movies</p>
  </li>
  <li class="movies_not">
      <img class="" src="${nomovies}" alt="sorry no movies" />
  </li>`;
    paginationLibraryRef.innerHTML = '';
    return;
  }
  let itemsForRender = dataArray.slice(beginGet, endGet);
  renderMovies(itemsForRender);
}

export function renderMovies(itemsForRender) {
  const moviesListElRef = document.querySelector('.movies__list');
  const moviesForRender = itemsForRender
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

  moviesListElRef.innerHTML = moviesForRender;
}
