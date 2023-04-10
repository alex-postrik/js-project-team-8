import moviesService from './movies-service';

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
  } catch (error) {
    console.log(error);
  }
}
function createMovieCardMarkup(movies) {
  const movieCardMarkup = movies
    .map(({ posterPath, title, genreIds, releaseDate, id }) => {
      return `
           <li class="movies__item" data-movies="${id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${posterPath}" alt="${title}"/>
                </div>
                <div class="movies__desc">
                    <p class="movies__title">${title}</p>
                    <p class="movies__info">${genreIds} | ${releaseDate}</p>
                </div>
            </li>
          `;
    })
    .join('');
  refs.moviesListEl.insertAdjacentHTML('beforeend', movieCardMarkup);
}
