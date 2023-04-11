import moviesService from './movies-service.js';
import { createMovieCardMarkup } from './card.js';
import Notiflix from 'notiflix';
import { renderPagination, FOR_SEARCH } from './pagination';

const searchForm = document.querySelector('.header-form__search');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector('.header-form__input');
  const searchQuery = searchInput.value.trim();

  if (searchQuery) {
    moviesService.searchQuery = searchQuery;
    try {
      const movies = await moviesService.fetchSearchMovies();
      if (movies.length === 0) {
        Notiflix.Notify.failure('Sorry, this movie is not found');
      } else {
        createMovieCardMarkup(movies);
        renderPagination(moviesService.page, moviesService.allPages, FOR_SEARCH);
      }
    } catch (error) {
      console.log(error);
    }
  }
});













// import moviesService from './movies-service.js';
// import  {createMovieCardMarkup } from './card.js';


// const searchForm = document.querySelector('.header-form__search');

// searchForm.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const searchInput = document.querySelector('.header-form__input');
//   const searchQuery = searchInput.value.trim();

//   if (searchQuery) {
//     moviesService.searchQuery = searchQuery;
//     try {
//       const movies = await moviesService.fetchSearchMovies();
//       createMovieCardMarkup(movies);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// });




