// Імпорт класу
// import moviesService from "./movies-service";

import axios from 'axios';

import { showSpinner } from './spinner.js';
import { hiddenSpinner } from './spinner.js';

hiddenSpinner();

const API_KEY = 'de2f3a0c57a311cc48a85909660d7281';
const BASE_URL = 'https://api.themoviedb.org/3';
const LOCKALSTORAGE_KEY = 'save-genres';

class MoviesServise {
  constructor() {
    // змінна для пошуку фільмів за словом
    this.searchQuery = '';
    this.page = 1;
    // змінна загальної кількості сторінок для пагінації
    this.allPages = 0;
    // змінна отримання id для переходу до повної інформації про фільм
    this.movieId = 0;
  }

  // Метод для запиту популярних фільмыів
  async fetchPopularMovies() {
    showSpinner();

    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
    const movies = await this.fetchMovie(url);

    hiddenSpinner();

    return movies;
  }

  // Метод для пошуку по ключовому слову
  async fetchSearchMovies() {
    showSpinner();

    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`;
    const movies = await this.fetchMovie(url);

    hiddenSpinner();

    return movies;
  }

  // Метод для запиту информації про фільм для модалки
  async fetchFullInfoMovie(id) {
    this.movieId = id;
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    try {
      showSpinner();

      const response = await axios.get(url);
      const data = await response.data;
      // console.log(response.data);
      const {
        poster_path,
        backdrop_path,
        title,
        genres,
        id,
        popularity,
        vote_average,
        vote_count,
        overview,
        original_title,
        release_date,
      } = data;
      const movie = {
        posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
        backdropPath: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
        title,
        genres:
          genres.length <= 3
            ? genres.map(genre => genre.name).join(', ')
            : genres
                .map(genre => genre.name)
                .slice(0, 2)
                .join(', ') + ', Other',
        id,
        popularity: popularity.toFixed(1),
        voteAverage: vote_average.toFixed(1),
        vote_count,
        overview,
        original_title,
        releaseDate: release_date.slice(0, 4),
      };
      // console.log(movie);

      hiddenSpinner();

      return movie;
    } catch (error) {
      console.error(error);
    }
  }

  // Метод для отримання посилання на видео трейлера
  async fetchVideo() {
    const url = `${BASE_URL}/movie/${this.movieId}/videos?api_key=${API_KEY}`;

    try {
      showSpinner();

      const response = await axios.get(url);
      const data = await response.data;
      const video = await data.results[0];

      const { key } = video;
      const videoKey = {
        key,
      };

      hiddenSpinner();

      return videoKey;
    } catch (error) {
      console.error(error);
    }
    // https://www.youtube.com/watch?v={ключ}
  }

  // Метод для додавання сторінки для пагінації
  addPage() {
    this.page += 1;
  }

  // Метод для віднімання сторінки для пагінації
  subtractPage() {
    this.page -= 1;
  }

  resetPage() {
    this.page = 1;
  }

  async fetchMovie(url) {
    try {
      showSpinner();

      const response = await axios.get(url);
      const data = await response.data;
      const moviesSort = await data.results;

      const genres = await this.fetchGenres();
      const getGenres = localStorage.getItem(LOCKALSTORAGE_KEY);

      if (getGenres) {
        const parsedGetGenres = JSON.parse(getGenres);

        const movies = moviesSort.map(movie => {
          const {
            poster_path,
            title,
            genre_ids,
            release_date,
            id,
            original_title,
            backdrop_path,
            overview,
            popularity,
            vote_average,
            vote_count,
          } = movie;
          this.movieId = id;

          const movieGenres = genre_ids.map(genreId => {
            const matchedGenre = parsedGetGenres.find(
              genre => genre.id === genreId
            );

            return matchedGenre.name;
          });

          return {
            posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
            title,
            genreIds:
              movieGenres.length <= 3
                ? movieGenres.join(', ')
                : movieGenres.slice(0, 2).join(', ') + ', Other',
            releaseDate: release_date.slice(0, 4),
            id,
            original_title,
            backdropPath: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            overview,
            popularity: popularity.toFixed(1),
            voteAverage: vote_average.toFixed(1),
            vote_count,
          };
        });
        this.allPages = data.total_pages;

        hiddenSpinner();

        return movies;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const data = await response.data;
    const genres = await data.genres;

    localStorage.setItem(LOCKALSTORAGE_KEY, JSON.stringify(genres));
  }
}

export default new MoviesServise();
