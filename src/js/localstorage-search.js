import Notiflix from 'notiflix';

// import { createMovieCardMarkup } from './card.js';
// import { renderPagination } from './pagination';
const moviesListEl = document.querySelector('.movies__list'),
  

import { createMovieCardMarkup } from './card.js';
import { renderPagination } from './pagination';



const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const  queueBtn = document.querySelector('button[data-id="queue-btn"]');


const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
console.log(parsedWatched);
const parsedQueue = JSON.parse(localStorage.getItem('movies in queue'));
console.log(parsedQueue);
console.log(parsedQueue[0].title);

const searchForm = document.querySelector('.header-form__search');
const searchInput = document.querySelector('.header-form__input');
searchInput.addEventListener('input', (e));
const searchQuery = searchInput.value.trim();
function e() {console.log(searchInput.value)}


searchForm.addEventListener('submit', event => {
    event.preventDefault();

        if (watchedBtn.classList.contains('header-movie-btn--active')) { searchInWatched() };
        if (queueBtn.classList.contains('header-movie-btn--active')) { searchInQueue() };
})
 
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

searchForm.addEventListener('submit', (searchInLocalStorage))
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
    }
    else {
        createMovieCardMarkup(movies);
        renderPagination(page, pages, curParam);
    }
}
    
function searchInQueue() {
    if (queue.length === 0)
       {Notiflix.Notify.failure('Sorry, this movie is not found');
    }
    else
    {createMovieCardMarkup(movies);
    renderPagination(page, pages, curParam)}    
}