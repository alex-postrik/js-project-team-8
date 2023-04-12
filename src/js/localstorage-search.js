import Notiflix from 'notiflix';
import { createMovieCardMarkup } from './card.js';
import { renderPagination } from './pagination';


const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const  queueBtn = document.querySelector('button[data-id="queue-btn"]');

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