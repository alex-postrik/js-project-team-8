// Імпорт класу
// import moviesService from "./movies-service";

import axios from 'axios';

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
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;

    try {
      const response = await axios.get(url);
      const data = await response.data;
      const moviesSort = await data.results;

      const genres = await this.fetchGenres();
      const getGenres = localStorage.getItem(LOCKALSTORAGE_KEY);

      if (getGenres) {
        const parsedGetGenres = JSON.parse(getGenres);

        const movies = moviesSort.map(movie => {
          const { poster_path, title, genre_ids, release_date, id } = movie;
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
          };
        });
        this.allPages = data.total_pages;

        return movies;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Метод для пошуку по ключовому слову
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
          genresAll,
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

  // Метод для запиту информації про фільм для модалки
  async fetchFullInfoMovie() {
    const url = `${BASE_URL}/movie/${this.movieId}?api_key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const data = await response.data;

      const {
        backdrop_path,
        title,
        genres,
        id,
        popularity,
        vote_average,
        vote_count,
        overview,
        original_title,
      } = data;
      const movie = {
        backdrop_path: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
        title,
        genres: genres.map(genre => genre.name).join(),
        id,
        popularity,
        vote_average,
        vote_count,
        overview,
        original_title,
      };

      return movie;
    } catch (error) {
      console.error(error);
    }
  }

  // Метод для отримання посилання на видео трейлера
  async fetchVideo() {
    const url = `${BASE_URL}/movie/${this.movieId}/videos?api_key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      const data = await response.data;
      const video = await data.results[0];

      const { key } = video;
      const videoKey = {
        key,
      };

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

  resetPage() {
    this.page = 1;
  }

  async fetchGenres() {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const data = await response.data;
    const genres = await data.genres;

    localStorage.setItem(LOCKALSTORAGE_KEY, JSON.stringify(genres));

    return genres;
  }
}

export default new MoviesServise();
