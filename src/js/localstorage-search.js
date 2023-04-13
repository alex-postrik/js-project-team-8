import Notiflix from 'notiflix';

  
const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const queueBtn = document.querySelector('button[data-id="queue-btn"]');
const searchListEl = document.querySelector('.lib__list')


// import { createMovieCardMarkup } from './card.js';
// import { renderPagination } from './pagination';

const moviesListEl = document.querySelector('.movies__list')
  

const moviesListEl = document.querySelector('.movies__list');


import { createMovieCardMarkup } from './card.js';
import { renderPagination } from './pagination';

const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const queueBtn = document.querySelector('button[data-id="queue-btn"]');


const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
const parsedQueue = JSON.parse(localStorage.getItem('movies in queue'));

const searchForm = document.querySelector('.header-form__search');
const searchInput = document.querySelector('.header-form__input');
searchInput.addEventListener('input', (e) => { });

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    if (watchedBtn.classList.contains('header-movie-btn--active'))
    { searchInWatched() };
    if (queueBtn.classList.contains('header-movie-btn--active'))
    { searchInQueue() };
    if (!watchedBtn.classList.contains('header-movie-btn--active') && !queueBtn.classList.contains('header-movie-btn--active'))
        {Notiflix.Notify.failure('Please chose Watched or Queue list'); }
    event.target.reset();
})
 
function searchInWatched() {
    searchListEl.innerHTML = " ";
    if (parsedWatched.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Watched list is empty');
    }
     for (const watchedTitle of parsedWatched) {
        const title = watchedTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        { const searchedCardMarkup =
                `<li class="movies__item" data-movies="${queueTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${queueTitle.posterPath}" alt="${queueTitle.title}"/>
                </div>
                    <p class="movies__title">${queueTitle.title}</p>
                    <p class="movies__info">${queueTitle.genres} | ${queueTitle.releaseDate}</p>
            </li>`;
            searchListEl.innerHTML = searchedCardMarkup;
         }  
    }
}

function searchInQueue() {
    searchListEl.innerHTML = " ";
    if (parsedQueue.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Queue list is empty');
    }
    for (const queueTitle of parsedQueue) {
        const title = queueTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        {const searchedCardMarkup =
                `<li class="movies__item" data-movies="${queueTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${queueTitle.posterPath}" alt="${queueTitle.title}"/>
                </div>
                    <p class="movies__title">${queueTitle.title}</p>
                    <p class="movies__info">${queueTitle.genres} | ${queueTitle.releaseDate}</p>
            </li>`;
            searchListEl.innerHTML = searchedCardMarkup;
        } 
      }  
}
searchInput.addEventListener('input', e);
const searchQuery = searchInput.value.trim();
function e() {
  console.log(searchInput.value);
}

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  if (watchedBtn.classList.contains('header-movie-btn--active')) {
    searchInWatched();
  }
  if (queueBtn.classList.contains('header-movie-btn--active')) {
    searchInQueue();
  }
});

function searchInWatched() {
  if (parsedWatched.length === 0) {
    Notiflix.Notify.failure('Sorry, Your Watched list is empty');
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

  moviesListEl.innerHTML = moviesHTML;
}

function searchInQueue() {
  if (parsedQueue.length === 0) {
    Notiflix.Notify.failure('Sorry, Your Queue list is empty');
  }
  if (searchInput.value === parsedQueue[0].title) {
    const moviesHTML = parsedQueue
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

    moviesListEl.innerHTML = moviesHTML;
  }

  const watched = localStorage.getItem('watchedMovies');
  const parsedWatched = JSON.parse(watched);

  const queue = localStorage.getItem('movies in queue');
  const parsedQueue = JSON.parse(queue);

  const searchForm = document.querySelector('.header-form__search');
  const searchQuery = searchInput.value.trim();

  searchForm.addEventListener('submit', searchInLocalStorage);
  searchInLocalStorage.preventDefault();

  function searchInLocalStorage() {
    if (watchedBtn.classList.contains('header-movie-btn--active'))
      searchInWatched();
    if (queueBtn.classList.contains('header-movie-btn--active'))
      searchInQueue();
  }

  function searchInWatched() {
    if (watched.length === 0) {
      Notiflix.Notify.failure('Sorry, this movie is not found');
    } else {
      createMovieCardMarkup(movies);
      renderPagination(page, pages, curParam);
    }
  }

  function searchInQueue() {
    if (queue.length === 0) {
      Notiflix.Notify.failure('Sorry, this movie is not found');
    } else {
      createMovieCardMarkup(movies);
      renderPagination(page, pages, curParam);
    }
  }
}