import moviesService from './movies-service';
import { renderPagination, FOR_POPULAR } from './pagination';

const refs = {
  moviesDivEl: document.querySelector('.movies__container'),
  moviesListEl: document.querySelector('.movies__list'),
};

renderMovieCard();

async function renderMovieCard(movies) {
  try {
    const movies = await moviesService.fetchPopularMovies();
    console.log(movies);
    createMovieCardMarkup(movies);
    renderPagination(moviesService.page, moviesService.allPages, FOR_POPULAR);
  } catch (error) {
    console.log(error);
  }
}
export function createMovieCardMarkup(movies) {
  const movieCardMarkup = movies
    .map(({ posterPath, title, genreIds, releaseDate, id }) => {
      return `
           <li class="movies__item" data-movies="${id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${posterPath}" alt="${title}"/>
                </div>
                    <p class="movies__title">${title}</p>
                    <p class="movies__info">${genreIds} | ${releaseDate}</p>
            </li>
          `;
    })
    .join('');
  refs.moviesListEl.innerHTML = movieCardMarkup;
}
