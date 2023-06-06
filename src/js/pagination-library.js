import noimage from '../image/No-Image-Placeholder.jpg';
import nomovies from '../image/library-dek.jpg';
import { scrollToTop } from '../utils/scrollToTop';
const KEY_WATCHED = 'movies in watched';
const KEY_QUEUE = 'movies in queue';
const LIMIT = 20;
export let dataArray = [];
export const paginationLibraryRef = document.querySelector('.pagination');
const moviesListElRef = document.querySelector('.movies__list');

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    initButton();
  }
});

const loadData = key => {
  try {
    const dataFromLocalStorage = localStorage.getItem(key);
    console.log('key', key);
    return dataFromLocalStorage === null
      ? []
      : (dataArray = JSON.parse(dataFromLocalStorage));
  } catch (error) {
    console.log(error.message);
  }
};

function initButton() {
  let watchedBtn = document.querySelector('button[data-id="watched-btn"]');
  let queueBtn = document.querySelector('button[data-id="queue-btn"]');

  watchedBtn.addEventListener('click', () => {
    watchedBtn.classList.add('header-movie-btn--active');
    queueBtn.classList.remove('header-movie-btn--active');
    localStoragePagination.resetPage();
    loadData(KEY_WATCHED);
    console.log('dataArray', dataArray);
    renderPagination();
    сutData();
  });

  queueBtn.addEventListener('click', () => {
    queueBtn.classList.add('header-movie-btn--active');
    watchedBtn.classList.remove('header-movie-btn--active');
    localStoragePagination.resetPage();
    loadData(KEY_QUEUE);
    renderPagination();
    сutData();
  });
  loadData(KEY_WATCHED);
  renderPagination();
  сutData();
}

class LocalStoragePagination {
  constructor() {
    this.lastPages = null;
    this.currentPage = 1;
  }

  getcurrentPage() {
    return this.currentPage;
  }
  getlastPages() {
    return this.lastPages;
  }

  incrementPage() {
    this.currentPage += 1;
  }
  decrementPage() {
    this.currentPage -= 1;
  }
  resetPage() {
    this.currentPage = 1;
  }
}
export const localStoragePagination = new LocalStoragePagination();

function сutData() {
  let beginGet = LIMIT * (localStoragePagination.currentPage - 1);
  let endGet = LIMIT + beginGet;
  // вставила
  console.log('hello');
  console.log('data', dataArray);
  if (!dataArray || dataArray.length === 0) {
    moviesListElRef.innerHTML = `<li><p>You don't have any saved movies</p>
  </li>
  <li class="movies_not">
      <img class="" src="${nomovies}" alt="sorry no movies" />
  </li>`;
    paginationLibraryRef.innerHTML = '';
    return;
  }
  let itemsForRender = dataArray.slice(beginGet, endGet);
  renderMoviesNextPage(itemsForRender);
}
// renderPagination();

export function renderPagination() {
  let markup = '';
  localStoragePagination.lastPages = Math.ceil(dataArray.length / LIMIT);
  const lastPages = localStoragePagination.getlastPages();
  const currentPage = localStoragePagination.getcurrentPage();

  if (dataArray.length === 0 || lastPages === 1) {
    paginationLibraryRef.innerHTML = '';
    return;
  }

  if (currentPage > 1)
    markup += `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path class='arrow-left' d="M12.667 8H3.333M8 12.667 3.333 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg></li>`;

  if (currentPage > 1)
    markup += `<li class="pagination__button pagination__button-end">1</li>`;

  if (currentPage > 4) {
    markup += `<li class="pagination__points">...</li>`;
  }

  if (currentPage > 3)
    markup += `<li class="pagination__button">${currentPage - 2}</li>`;

  if (currentPage > 2)
    markup += `<li class="pagination__button">${currentPage - 1}</li>`;

  markup += `<li class="pagination__button pagination__button-current">${currentPage}</li>`;

  if (currentPage + 1 < lastPages)
    markup += `<li class="pagination__button">${currentPage + 1}</li>`;

  if (currentPage + 2 < lastPages)
    markup += `<li class="pagination__button">${currentPage + 2}</li>`;

  if (currentPage + 4 < lastPages || currentPage + 4 === lastPages)
    markup += `<li class="pagination__points">...</li>`;

  if (currentPage < lastPages)
    markup += `<li class="pagination__button pagination__button-end">${lastPages}</li>`;

  if (currentPage < lastPages)
    markup += `<li class="pagination__arrow-right arrow-right"><svg class='arrow-right' width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.333 8h9.334M8 12.667 12.667 8 8 3.333" stroke="#000" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></li>`;

  paginationLibraryRef.innerHTML = markup;
}

paginationLibraryRef.addEventListener('click', onPaginationClick);

function onPaginationClick(e) {
  if (e.target.textContent === '...') return;
  if (e.target.classList.contains('arrow-right')) {
    localStoragePagination.incrementPage();
  }
  if (e.target.classList.contains('arrow-left')) {
    localStoragePagination.decrementPage();
  }
  if (Number(e.target.textContent)) {
    localStoragePagination.currentPage = Number(e.target.textContent);
  }
  сutData();
  renderPagination();
  scrollToTop();
}

function renderMoviesNextPage(itemsForRender) {
  const moviesListElRef = document.querySelector('.movies__list');
  const moviesForRender = itemsForRender
    .map(movie => {
      let poster = movie.posterPath;
      if (
        movie.posterPath === 'https://image.tmdb.org/t/p/w500null' ||
        movie.posterPath ===
          'https://image.tmdb.org/t/p/w500/mNSqObjKszcxr55buQafQF9ARiC.jpg'
      ) {
        poster = noimage;
      }
      return `
		<li class="movies__item" data-movies="${movie.id}">
			<div class="movies__thumb">
			<img class="movies__img" src="${poster}" alt="${movie.title}"/>
			</div>
			<p class="movies__title">${movie.title}</p>
			<p class="movies__info">${movie.genres} | ${movie.releaseDate}</p>
		</li>
	`;
    })
    .join('');

  moviesListElRef.innerHTML = moviesForRender;
}
