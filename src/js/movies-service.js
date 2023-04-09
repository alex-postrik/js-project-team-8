// Імпорт класу
// import moviesService from "./movies-service";

import axios from 'axios';

const API_KEY = 'de2f3a0c57a311cc48a85909660d7281';
const BASE_URL = 'https://api.themoviedb.org/3';

class MoviesServise {
  constructor() {
    // змінна пошуку фільмів за словом
    this.searchQuery = '';
    this.page = 1;
    // змінна загальної кількості сторінок для пагінації
    this.allPages = 0; 
  }

  // Метод для запиту популярних фільмыів
  async fetchPopularMovies() {
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.page}`;

    try {
      const response = await axios.get(url);
      const data = await response.data;
      const moviesSort = await data.results;
      const movies = await moviesSort.map(movie => {
    
        const { poster_path, title, genre_ids, release_date, id } = movie;

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

  // Метод для пошуку по ключовому слову
  async fetchSearchMovies() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}`;

     try {
      const response = await axios.get(url);
      const data = await response.data;
       const moviesSort = await data.results;
       
      const movies = await moviesSort.map(movie => {
        const { poster_path, title, genre_ids, release_date, id } = movie;

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

  // Метод для додавання сторінки для пагінації
  addPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async fetchGenres(genresId) {
    const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

    const response = await axios.get(url);
    const data = await response.data;
    const genres = await data.genres;

    return genres;
  }
}

export default new MoviesServise();

