import Notiflix from 'notiflix';
  
const watchedBtn = document.querySelector('button[data-id="watched-btn"]');
const queueBtn = document.querySelector('button[data-id="queue-btn"]');
const searchListEl = document.querySelector('.lib__list')

const parsedWatched = JSON.parse(localStorage.getItem('watchedMovies'));
const parsedQueue = JSON.parse(localStorage.getItem('movies in queue'));

const searchForm = document.querySelector('.header-form__search');
const searchInput = document.querySelector('.header-form__input');
searchInput.addEventListener('input', (e) => { });

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
    searchListEl.innerHTML = " ";
    if (parsedWatched.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Watched list is empty');
    }
     for (const watchedTitle of parsedWatched) {
        const title = watchedTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        { const searchedCardMarkup =
                `<li class="movies__item" data-movies="${queueTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${queueTitle.posterPath}" alt="${queueTitle.title}"/>
                </div>
                    <p class="movies__title">${queueTitle.title}</p>
                    <p class="movies__info">${queueTitle.genres} | ${queueTitle.releaseDate}</p>
            </li>`;
            searchListEl.innerHTML = searchedCardMarkup;
         }  
    }
}

function searchInQueue() {
    searchListEl.innerHTML = " ";
    if (parsedQueue.length === 0) {
        Notiflix.Notify.failure('Sorry, Your Queue list is empty');
    }
    for (const queueTitle of parsedQueue) {
        const title = queueTitle.title.toLowerCase();
        if (title.includes(searchInput.value))
        {const searchedCardMarkup =
                `<li class="movies__item" data-movies="${queueTitle.id}">
                <div class="movies__thumb">
                    <img class="movies__img" src="${queueTitle.posterPath}" alt="${queueTitle.title}"/>
                </div>
                    <p class="movies__title">${queueTitle.title}</p>
                    <p class="movies__info">${queueTitle.genres} | ${queueTitle.releaseDate}</p>
            </li>`;
            searchListEl.innerHTML = searchedCardMarkup;
        } 
      }  
}