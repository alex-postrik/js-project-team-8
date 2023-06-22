import moviesService from './movies-service';
import { renderPagination } from './pagination-library';
import { loadData, сutData } from './renderMovies';
import { KEY_QUEUE, KEY_WATCHED } from './variable';
// import { renderMoviesQueue } from './button-queue';
// import { renderMoviesWatched } from './button-queue';

let moviesInQueue = [];
let watchedBtn = document.querySelector('button[data-id="watched-btn"]');
let queueBtn = document.querySelector('button[data-id="queue-btn"]');

export async function onAddQ(currentMovieId) {
  const qBtn = document.querySelector('.btn-add-queue');
  const Q_KEY = 'movies in queue';
  const movie = await moviesService.fetchFullInfoMovie(currentMovieId);
  // console.log(currentMovieId);

  const movieCheck = localStorage.getItem(Q_KEY);
  const queue = load(Q_KEY);

  // якщо сховище порожнє - пушимо об'єкт в масив

  if (movieCheck === null) {
    moviesInQueue.push(movie);
    save(Q_KEY, moviesInQueue);
    qBtn.textContent = 'remove from queque';
  }
  //якщо є дані - перевіряємо, чи є там айді фільму
  else if (movieCheck !== null) {
    // console.log(movieCheck.includes(currentMovieId));
    //  console.log(moviesInQueue.length);

    if (movieCheck.includes(currentMovieId)) {
      if (moviesInQueue.length === 1 && queue.length === 1) {
        localStorage.removeItem(Q_KEY);
        moviesInQueue = [];

        qBtn.textContent = 'add to queque';
        checkBtn();
      } else {
        //шукаємо фільм за індексом, видаляємо з масиву та перезаписуємо
        let indexM = queue.map(el => el.id).indexOf(Number(currentMovieId));
        // console.log(indexM);
        queue.splice(indexM, 1);
        moviesInQueue = queue;
        save(Q_KEY, queue);
        qBtn.textContent = 'add to queque';
        checkBtn();
      }
    } else {
      //якщо фільму немає, пушимо в масив та перезаписуємо
      queue.push(movie);
      save(Q_KEY, queue);
      qBtn.textContent = 'remove from queque';
      // console.log(moviesInQueue.length);
    }
  }
}

const checkBtn = () => {
  if (window.location.href.indexOf('library.html') > -1) {
    // пользователь находится на странице library.html
    if (queueBtn.classList.contains('header-movie-btn--active')) {
      // renderMoviesQueue();
      loadData(KEY_QUEUE);
      сutData();
      renderPagination();
    } else if (watchedBtn.classList.contains('header-movie-btn--active')) {
      // renderMoviesWatched();
      loadData(KEY_WATCHED);
      сutData();
      renderPagination();
      // console.log('safasf');
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
