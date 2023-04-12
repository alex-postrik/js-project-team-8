const addToWatchedButton = document.querySelector('.add-to-watched');


const movieData = {
  title: 'Movie Title'
};


function addToWatched(movie) {
  
  const watchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];

  
  const movieExists = watchedMovies.some((watchedMovie) => watchedMovie.title === movie.title);

  
  if (!movieExists) {
    watchedMovies.push(movie);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    alert(`${movie.title} був доданий до списку переглянутих фільмів.`);
    addToWatchedButton.innerText = 'Removed';
  } else {
    
    const updatedWatchedMovies = watchedMovies.filter((watchedMovie) => watchedMovie.title !== movie.title);
    localStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));
    alert(`${movie.title} був видалений зі списку переглянутих фільмів.`);
    addToWatchedButton.innerText = 'Add to Watched';
  }
}


// addToWatchedButton.addEventListener('click', () => {
//   addToWatched(movieData);
// });
