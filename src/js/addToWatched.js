import moviesService from './movies-service';
import { renderMoviesQueue } from './button-queue';
import { renderMoviesWatched } from './button-queue';

let moviesAddWatched = [];
let watchedBtn = document.querySelector('button[data-id="watched-btn"]');
let queueBtn = document.querySelector('button[data-id="queue-btn"]');

export async function onAddW(currentMovieId) {
  const addWatchedBtn = document.querySelector('.btn-add-watched');

  const W_KEY = 'movies in watched';
  const movie = await moviesService.fetchFullInfoMovie(currentMovieId);

  const movieChecked = localStorage.getItem(W_KEY);
  const watched = load(W_KEY);

  // якщо сховище порожнє - пушимо об'єкт в масив

  if (movieChecked === null) {
    moviesAddWatched.push(movie);
    save(W_KEY, moviesAddWatched);
    addWatchedBtn.textContent = 'remove from watched';
  }
  //якщо є дані - перевіряємо, чи є там айді фільму
  else if (movieChecked !== null) {
    if (movieChecked.includes(currentMovieId)) {
      if (moviesAddWatched.length === 1 && watched.length === 1) {
        localStorage.removeItem(W_KEY);
        moviesAddWatched = [];
        addWatchedBtn.textContent = 'add to watched';
        checkBtn();
      } else {
        //шукаємо фільм за індексом, видаляємо з масиву та перезаписуємо
        let indexM = watched.map(el => el.id).indexOf(Number(currentMovieId));

        watched.splice(indexM, 1);
        moviesAddWatched = watched;
        save(W_KEY, watched);
        addWatchedBtn.textContent = 'add to watched';
        checkBtn();
      }
    } else {
      //якщо фільму немає, пушимо в масив та перезаписуємо
      watched.push(movie);
      save(W_KEY, watched);
      addWatchedBtn.textContent = 'remove from watched';
    }
  }
}

const checkBtn = () => {
  if (window.location.href.indexOf('library.html') > -1) {
    // пользователь находится на странице library.html
    if (queueBtn.classList.contains('header-movie-btn--active')) {
      renderMoviesQueue();
    } else if (watchedBtn.classList.contains('header-movie-btn--active')) {
      renderMoviesWatched();
      console.log('safasf');
    }
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};
