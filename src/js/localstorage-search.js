import Notiflix from 'notiflix';
import { paginationLibraryRef } from './pagination-library';
const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const queueBtn = document.querySelector('button[data-id="queue-btn"]');
const searchListEl = document.querySelector('.movies__list');

const parsedWatched = JSON.parse(localStorage.getItem('movies in watched'));
const parsedQueue = JSON.parse(localStorage.getItem('movies in queue'));

const searchForm = document.querySelector('.js-lib__search');
const searchInput = document.querySelector('.js-lib__input');
searchInput.addEventListener('input', e => {});

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  if (watchedBtn.classList.contains('header-movie-btn--active')) {
    searchInWatched();
  }
  if (queueBtn.classList.contains('header-movie-btn--active')) {
    searchInQueue();
  }
  event.target.reset();
});

function searchInWatched() {
  searchListEl.innerHTML = ' ';
  if (parsedWatched.length === 0) {
    Notiflix.Notify.failure('Sorry, Your Watched list is empty');
  }
  for (const watchedTitle of parsedWatched) {
    const title = watchedTitle.title.toLowerCase();
    if (title.includes(searchInput.value)) {
      const searchedCardMarkup = `<li class="movies__item" data-movies="${watchedTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${watchedTitle.posterPath}" alt="${watchedTitle.title}"/>
                </div>
                    <p class="movies__title">${watchedTitle.title}</p>
                    <p class="movies__info">${watchedTitle.genres} | ${watchedTitle.releaseDate}</p>
            </li>`;
      searchListEl.insertAdjacentHTML('beforeend', searchedCardMarkup);
    }
  }
  paginationLibraryRef.innerHTML = '';
}

function searchInQueue() {
  searchListEl.innerHTML = ' ';
  if (parsedQueue.length === 0) {
    Notiflix.Notify.failure('Sorry, Your Queue list is empty');
  }
  for (const queueTitle of parsedQueue) {
    const title = queueTitle.title.toLowerCase();
    if (title.includes(searchInput.value)) {
      const searchedCardMarkup = `<li class="movies__item" data-movies="${queueTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${queueTitle.posterPath}" alt="${queueTitle.title}"/>
                </div>
                    <p class="movies__title">${queueTitle.title}</p>
                    <p class="movies__info">${queueTitle.genres} | ${queueTitle.releaseDate}</p>
            </li>`;
      searchListEl.insertAdjacentHTML('beforeend', searchedCardMarkup);
    }
  }
  paginationLibraryRef.innerHTML = '';
}
