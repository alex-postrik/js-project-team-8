import moviesService from './movies-service';
import { renderPagination, FOR_POPULAR } from './pagination';
import noimage from '../image/No-Image-Placeholder.jpg';

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
      let poster = posterPath;
      if (posterPath === 'https://image.tmdb.org/t/p/w500null') {
        poster = noimage;
      }
      let genre = genreIds;
      if (!genreIds) {
        genre = 'Genre: Undefined';
      }
      let year = releaseDate;
      if (!releaseDate) {
        year = 'Release date: Undefined';
      }

      return `
           <li class="movies__item" data-movies="${id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${poster}" alt="${title}"/>
                </div>
                    <p class="movies__title">${title}</p>
                    <p class="movies__info">${genre} | ${year}</p>
            </li>
          `;
    })
    .join('');
  refs.moviesListEl.innerHTML = movieCardMarkup;
}
