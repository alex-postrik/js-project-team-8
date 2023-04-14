 import moviesService from './movies-service.js';
import { createMovieCardMarkup } from './card.js';
import { renderPagination, FOR_SEARCH } from './pagination';

const searchFormEl = document.querySelector('.header-form__search');
const containerEl = document.querySelector('.container');
const moviesListEl = document.querySelector('.movies__list');
const paginationRef = document.querySelector('.pagination');

searchFormEl.addEventListener('submit', async event => {
  event.preventDefault();
  const searchInput = document.querySelector('.header-form__input');
  const searchQuery = searchInput.value.trim();

  if (searchQuery) {
    try {
      moviesService.searchQuery = searchQuery;
      moviesService.resetPage(); // reset the page to 1 for a new collection
      moviesListEl.innerHTML = ''; // clear the movies list for a new collection
      const movies = await moviesService.fetchSearchMovies();
      if (movies.length === 0) {
        paginationRef.innerHTML = '';
        if (!document.querySelector('.search-result-not-found')) {
          const searchResultNotFound = document.createElement('div');
          searchResultNotFound.textContent =
            'Search result not successful. Enter the correct movie name.';
          searchResultNotFound.classList.add('search-result-not-found');
          containerEl.style.position = 'relative';
          searchResultNotFound.style.position = 'absolute';
          searchResultNotFound.style.top = '-20px';
          searchResultNotFound.style.left = '-10px';
          searchFormEl.insertAdjacentElement('beforeend', searchResultNotFound);
        }

        searchInput.addEventListener('input', function () {
          if (
            (this.value.trim().length === 0 ||
              this.value.trim().toLowerCase() ===
                moviesService.searchQuery.toLowerCase()) &&
            document.querySelector('.search-result-not-found')
          ) {
            document.querySelector('.search-result-not-found').remove();
          }
        });
      } else {
        createMovieCardMarkup(movies);
        renderPagination(
          moviesService.page,
          moviesService.allPages,
          FOR_SEARCH
        );
        if (document.querySelector('.search-result-not-found')) {
          document.querySelector('.search-result-not-found').remove();
        }
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