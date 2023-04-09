import moviesService from './movies-service';

function xxx() {
  moviesService.fetchPopularMovies().then(movies => {
    console.log(movies);
    // console.log(moviesService.allPages);
  });

  moviesService.fetchGenres().then(genres => {
    console.log(genres);

  });
  
}
xxx();
