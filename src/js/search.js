//

// import axios from 'axios';
// import { renderMovieCard, createMovieCardMarkup } from './card';

// const API_KEY = 'de2f3a0c57a311cc48a85909660d7281';
// const BASE_URL = 'https://api.themoviedb.org/3';

// class MoviesService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.allPages = 0;
//   }

//   async searchMovies(searchQuery) {
//     this.searchQuery = searchQuery;
//     this.page = 1;

//     try {
//       const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${this.page}`);
//       const data = await response.data;

//       const moviesSort = data.results;
//       const movies = moviesSort.map(movie => {
//         const { poster_path, title, genre_ids, release_date, id } = movie;

//         return {
//           posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
//           title,
//           genre_ids,
//           releaseDate: release_date.slice(0, 4),
//           id,
//         };
//       });

//       this.allPages = data.total_pages;
//       return movies;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// const searchForm = document.querySelector('.header-form__search');

// searchForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   // Получить значение поля ввода
//   const searchInput = document.querySelector('.header-form__input');
//   const searchQuery = searchInput.value.trim();

//   // Вызвать метод для поиска фильмов
//   const moviesService = new MoviesService();
//   const movies = await moviesService.searchMovies(searchQuery);

//   // Отфильтровать фильмы по ключевому слову
//   const filteredMovies = movies.filter(movie => {
//     const title = movie.title.toLowerCase();
//     return title.includes(searchQuery.toLowerCase());
//   });

//   // Обновить список фильмов на странице
//   renderMovies(filteredMovies);
// });

// function renderMovies(movies) {
//   const moviesContainer = document.querySelector('.movies__list');
//   moviesContainer.innerHTML = '';

//   // Добавить стили для отображения сетки из 3 фильмов в ширину
//   moviesContainer.style.display = 'grid';
//   moviesContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
//   moviesContainer.style.gridGap = '15px';

//   // Разделить фильмы на строки
//   const rows = [];
//   for (let i = 0; i < movies.length; i += 3) {
//     rows.push(movies.slice(i, i + 3));
//   }

//   // Для каждой строки фильмов создать контейнер
//   rows.forEach(row => {
//     const rowContainer = document.createElement('div');
//     rowContainer.style.display = 'flex';
//     rowContainer.style.justifyContent = 'space-between';

//     // Добавить фильмы в контейнер строки
//     row.forEach(movie => {
//       const movieCardMarkup = createMovieCardMarkup(movie);
//       renderMovieCard(moviesContainer, movieCardMarkup);
//     });

//         moviesContainer.appendChild(rowContainer);
//       });
//     }

import axios from 'axios';

const API_KEY = 'de2f3a0c57a311cc48a85909660d7281';
const BASE_URL = 'https://api.themoviedb.org/3';

class MoviesService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.allPages = 0;
    this.movieId = 0;
  }

  async fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`;

    try {
      const response = await axios.get(url);
      const data = await response.data;
      const moviesSort = await data.results;

      const movies = await moviesSort.map(movie => {
        const { poster_path, title, genre_ids, release_date, id } = movie;
        this.movieId = id;

        return {
          posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
          title,
          genre_ids,
          releaseDate: release_date.slice(0, 4),
          id,
        };
      });
      this.allPages = data.total_pages;

      return movies;
    } catch (error) {
      console.error(error);
    }
  }
}

const searchForm = document.querySelector('.header-form__search');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const searchInput = document.querySelector('.header-form__input');
  const searchQuery = searchInput.value.trim();

  const moviesService = new MoviesService();
  moviesService.searchQuery = searchQuery;
  const movies = await moviesService.fetchSearchMovies();

  renderMovies(movies);
});

function renderMovies(movies) {
  createMovieCardMarkup(movies);
}

function createMovieCardMarkup(movies) {
  const moviesContainer = document.querySelector('.movies__list');
  const movieCardMarkup = movies
    .map(({ posterPath, title, genre_ids, releaseDate, id }) => {
      return `
           <li class="movies__item" data-movies="${id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${posterPath}" alt="${title}"/>
                </div>
                <div class="movies__desc">
                    <p class="movies__title">${title}</p>
                    <p class="movies__info">${genre_ids.join(
                      ', '
                    )} | ${releaseDate}</p>
                </div>
            </li>
          `;
    })
    .join('');
  moviesContainer.innerHTML = movieCardMarkup;
}
