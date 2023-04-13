import Notiflix from 'notiflix';
  
const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const queueBtn = document.querySelector('button[data-id="queue-btn"]');

const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
// console.log(parsedWatched);
const parsedQueue = JSON.parse(localStorage.getItem('movies in queue'));
// console.log(parsedQueue);
// console.log(parsedQueue[0].title);

const searchForm = document.querySelector('.header-form__search');
const searchInput = document.querySelector('.header-form__input');
searchInput.addEventListener('input', (e) => { });
// const searchQuery = searchInput.value.trim();


searchForm.addEventListener('submit', event => {
    event.preventDefault();
    if (watchedBtn.classList.contains('header-movie-btn--active'))
    { searchInWatched() };
    if (queueBtn.classList.contains('header-movie-btn--active'))
    { searchInQueue() };
    if (!watchedBtn.classList.contains('header-movie-btn--active') && !queueBtn.classList.contains('header-movie-btn--active'))
        {Notiflix.Notify.failure('Please chose Watched or Queue list'); }
    event.target.reset();
})
 
function searchInWatched() {
    if (parsedWatched.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Watched list is empty');
    }
     for (const watchedTitle of parsedWatched) {
        const title = watchedTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        {
           console.log(watchedTitle.title);
         }  
        // else {
        //     return  Notiflix.Notify.failure('Sorry, no match in Your Watched list');
        //  } 
    }
}

function searchInQueue() {
    if (parsedQueue.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Queue list is empty');
    }
    for (const queueTitle of parsedQueue) {
        const title = queueTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        {
            console.log(queueTitle.id);
        } 
        // else {
        //    return Notiflix.Notify.failure('Sorry, no match in Your Queue list'); 
        // }
      }  
}