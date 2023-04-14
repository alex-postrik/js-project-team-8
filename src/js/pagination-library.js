// import { renderMoviesQueueNextPage } from 'module';
import noimage from '../image/No-Image-Placeholder.jpg';
const KEY_WATCHED = 'movies in watched';
const KEY_QUEUE = 'movies in queue';
const LIMIT = 20;
let itemsForRender = [];
let dataArray = [];

const paginationLibraryRef = document.querySelector('.pagination');

// window.addEventListener('load', initButtons);
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('library.html')) {
    initButton();
  }
});

const load = key => {
  try {
    const arrayFromLocalStorage = localStorage.getItem(key);
    return arrayFromLocalStorage === null
      ? []
      : (dataArray = JSON.parse(arrayFromLocalStorage));
  } catch (error) {
    console.log(error.message);
  }
};

function initButton() {
  let watchedBtn = document.querySelector('button[data-id="watched-btn"]');
  let queueBtn = document.querySelector('button[data-id="queue-btn"]');

  if (watchedBtn && queueBtn) {
    watchedBtn.addEventListener('click', () => {
      localStoragePagination.resetPage();
      load(KEY_WATCHED);
      renderPagination();
    });

    queueBtn.addEventListener('click', () => {
      localStoragePagination.resetPage();
      // getDataLocalStorage();
      localStoragePagination.resetPage();
      load(KEY_QUEUE);
      renderPagination();
      // console.log('hello  с моего скрипта');
    });
    load(KEY_WATCHED);
    renderPagination();
  }
}
// window.addEventListener('load', initButton);

// getDataLocalStorage();
// export function getDataLocalStorage() {
//   watchedBtn = document.querySelector('button[data-id="watched-btn"]');
//   queueBtn = document.querySelector('button[data-id="queue-btn"]');
//   if (watchedBtn.classList.contains('header-movie-btn--active')) {
//     load(KEY_WATCHED);
//   }
//   if (queueBtn.classList.contains('header-movie-btn--active')) {
//     load(KEY_QUEUE);
//     console.log('hello ddgdgdg');
//   }
// }

class LocalStoragePagination {
  constructor() {
    this.lastPages = null;
    // this.dataArray = [];
    this.currentPage = 1;
    // this.galleryItems = null;
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

// сutItems();

function сutItems() {
  let beginGet = LIMIT * (localStoragePagination.currentPage - 1);
  let endGet = LIMIT + beginGet;

  let itemsForRender = dataArray.slice(beginGet, endGet);
  renderMoviesQueueNextPage(itemsForRender);
  // console.log('cut items', itemsForRender);
}
renderPagination();

export function renderPagination() {
  let markup = '';
  localStoragePagination.lastPages = Math.ceil(dataArray.length / LIMIT);
  // console.log(dataArray, 'что в рендер приходит');
  if (dataArray.length === 0) {
    paginationLibraryRef.innerHTML = '';
    // console.log('привет из удаления пагинации');
    // console.log(dataArray.length);
    return;
  }
  if (
    !localStoragePagination.currentPage ||
    localStoragePagination.currentPage > localStoragePagination.lastPages
  )
    return;

  if (localStoragePagination.currentPage > 1)
    markup += `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg></li>`;

  if (localStoragePagination.currentPage > 1)
    markup += `<li class="pagination__button pagination__button-end">1</li>`;

  if (localStoragePagination.currentPage > 4)
    markup += `<li class="pagination__points">...</li>`;

  if (localStoragePagination.currentPage > 3)
    markup += `<li class="pagination__button">${
      localStoragePagination.currentPage - 2
    }</li>`;

  if (localStoragePagination.currentPage > 2)
    markup += `<li class="pagination__button">${
      localStoragePagination.currentPage - 1
    }</li>`;

  markup += `<li class="pagination__button pagination__button-current">${localStoragePagination.currentPage}</li>`;

  if (localStoragePagination.currentPage + 1 < localStoragePagination.lastPages)
    markup += `<li class="pagination__button">${
      localStoragePagination.currentPage + 1
    }</li>`;

  if (localStoragePagination.currentPage + 2 < localStoragePagination.lastPages)
    markup += `<li class="pagination__button">${
      localStoragePagination.currentPage + 2
    }</li>`;

  if (localStoragePagination.currentPage + 4 < localStoragePagination.lastPages)
    markup += `<li class="pagination__points">...</li>`;

  if (localStoragePagination.currentPage < localStoragePagination.lastPages)
    markup += `<li class="pagination__button pagination__button-end">${localStoragePagination.lastPages}</li>`;

  if (localStoragePagination.currentPage < localStoragePagination.lastPages)
    markup += `<li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg></li>`;

  paginationLibraryRef.innerHTML = markup;
}

paginationLibraryRef.addEventListener('click', onPaginationClick);

function onPaginationClick(evt) {
  // console.log(evt.target.textContent);

  if (evt.target.textContent === '...') return;
  if (evt.target.classList.contains('arrow-right')) {
    localStoragePagination.incrementPage();
  }
  if (evt.target.classList.contains('arrow-left')) {
    localStoragePagination.decrementPage();
  }
  if (Number(evt.target.textContent)) {
    localStoragePagination.currentPage = Number(evt.target.textContent);
    // evt.target.classList.add('pagination__button-current');
  }
  // listPage();
  сutItems();
  renderPagination();
  // scrollToTop();
  // console.log('из класса страница текущая', localStoragePagination.currentPage);
}

function renderMoviesQueueNextPage(itemsForRender) {
  const moviesListElRef = document.querySelector('.movies__list');
  const moviesHTML = itemsForRender
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

  moviesListElRef.innerHTML = moviesHTML;
}

// Ці функції тимчасові save, save, const KEY_TEST = 'test'; const galleryItems
// const save = (key, galleryItems) => {
//   try {
//     const dataImg = JSON.stringify(galleryItems);
//     localStorage.setItem(key, dataImg);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// save(KEY_TEST, galleryItems);
// let listRef = document.querySelectorAll('.pagination li');
// listPage();
// function listPage() {
//   if (!dataArray || dataArray.length <= LIMIT) {
//     return;
//   }
//   localStoragePagination.lastPages = Math.ceil(dataArray.length / LIMIT);
//   console.log(localStoragePagination.getlastPages());
//   paginationLibraryRef.innerHTML = '';

//   // if (
//   //   localStoragePagination.currentPage >= 5 &&
//   //   localStoragePagination.lastPages > 8
//   // ) {
//   //   const markupWithPoints = `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"
//   //       xmlns="http://www.w3.org/2000/svg">
//   //       <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//   //         stroke-linejoin="round" />
//   //       <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"
//   //         stroke-linecap="round" stroke-linejoin="round" />
//   //     </svg></li>
//   //     <li class="pagination__button pagination__button-end">1</li>
//   //     <li class="pagination__points">...</li>
//   //     <li class="pagination__button">${
//   //       localStoragePagination.currentPage - 2
//   //     }</li>
//   //     <li class="pagination__button">${
//   //       localStoragePagination.currentPage - 1
//   //     }</li>
//   //     <li class="pagination__button pagination__button-current">${
//   //       localStoragePagination.currentPage
//   //     }</li>
//   //      <li class="pagination__button">${
//   //        localStoragePagination.currentPage + 1
//   //      }</li>
//   //     <li class="pagination__button">${
//   //       localStoragePagination.currentPage + 2
//   //     }</li>

//   //     `;

//   //   paginationLibraryRef.innerHTML = markupWithPoints;
//   //   if (
//   //     localStoragePagination.currentPage + 2 <
//   //     localStoragePagination.lastPages
//   //   ) {
//   //     const additionalMarkup = `<li class="pagination__points pagination__points__right">...</li>
//   //     <li class="pagination__button pagination__button-end">${localStoragePagination.lastPages}</li>
//   //       <li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"
//   //       xmlns="http://www.w3.org/2000/svg">
//   //       <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//   //         stroke-linejoin="round" />
//   //       <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"
//   //         stroke-linecap="round" stroke-linejoin="round" />
//   //     </svg></li>`;
//   //     paginationLibraryRef.insertAdjacentHTML('beforeend', additionalMarkup);
//   //   }
//   //   // check();
//   //   return;
//   // }
//   // function createArrayPages(lastPages) {
//   //   let arrayAllPages = [];
//   //   for (let i = lastPages; i > 0; i -= 1) {
//   //     arrayAllPages.unshift(i);
//   //   }
//   //   console.log(arrayAllPages);
//   //   listPage(lastPages);
//   //   // createMarkupFirst(arrayAllPages);
//   // }
//   // if (localStoragePagination.lastPages <= 8) {
//   let numberLastPageInMarkup = localStoragePagination.lastPages;
//   if (localStoragePagination.lastPages >= 8) {
//     numberLastPageInMarkup = 8;
//   }
//   for (let index = 1; index <= numberLastPageInMarkup; index++) {
//     let newPage = document.createElement('li');
//     newPage.innerText = index;
//     newPage.classList.add('pagination__button');
//     if (index === localStoragePagination.currentPage) {
//       newPage.classList.add('pagination__button-current');
//     }
//     paginationLibraryRef.appendChild(newPage);
//     // newPage.setAttribute('onclick', 'changePage(' + index + ')');
//   }
//   if (localStoragePagination.lastPages > 8) {
//     paginationLibraryRef.insertAdjacentHTML(
//       'beforeend',
//       `<li class="pagination__points">...</li>
//     <li class="pagination__button pagination__button-end">${localStoragePagination.lastPages}</li>`
//     );
//   }
//   if (localStoragePagination.currentPage !== localStoragePagination.lastPages) {
//     const arrow_right = `<li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//           stroke-linejoin="round" />
//         <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"
//           stroke-linecap="round" stroke-linejoin="round" />
//       </svg></li>`;
//     paginationLibraryRef.insertAdjacentHTML('beforeend', arrow_right);
//   }
//   if (localStoragePagination.currentPage > 1) {
//     const arrow_left = `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//           stroke-linejoin="round" />
//         <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"
//           stroke-linecap="round" stroke-linejoin="round" />
//       </svg></li>`;
//     paginationLibraryRef.insertAdjacentHTML('afterbegin', arrow_left);
//   }
//   // }

//   // !!!!!!!!!!!!
//   // if (
//   //   localStoragePagination.lastPages <= 8 &&
//   //   localStoragePagination.currentPage <= 4
//   // ) {
//   //   const points = `<li class="pagination__points">...</li>`;
//   //   paginationLibraryRef.insertAdjacentHTML('beforeend', points);
//   // }

//   // check();
// }

// const rightPointsRef = document.querySelector('.pagination__points_right');

// function check() {
//   if (localStoragePagination.currentPage === localStoragePagination.lastPages) {
//     const arrowRightRef = document.querySelector(
//       '.pagination .pagination__arrow-right'
//     );
//     arrowRightRef.style.display = 'none';
//   }
// if (
//   localStoragePagination.currentPage + 4 <
//   localStoragePagination.lastPages
// ) {
//   const rightPointsRef = document.querySelector('.pagination__points_right');
//   rightPointsRef.style.display = 'none';
// }
// }
// function scrollToTop() {
//   window.scrollTo(0, 0);
// }
// console.log(localStoragePagination.getcurrentPage());
// console.log('из класса страница', localStoragePagination.currentPage);
// function changePage(page) {
//   currentPage = page;
// }

// function markupPagination(allPages) {
//   let markup = '';
//   console.log(allPages);
//   if (allPages > 1) {
//     markup += `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//           stroke-linejoin="round" />
//         <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"
//           stroke-linecap="round" stroke-linejoin="round" />
//       </svg></li>`;
//   }

//   //   paginationLibraryRef.innerHTML = markup;
// }

// function onPagination(KEY_TEST) {
//   if (localStorage.getItem(KEY_TEST) === null) {
//     console.log('local storage = null');
//   }
// }

// function name(params) {}

// старая разметка

// function createMarkupFirst(arrayAllPages) {
//   let listMarkup = arrayAllPages
//     .map(item => {
//       return `
//         <li class="pagination__button">${item}</li>
//       `;
//     })
//     .join('');
//   listMarkup += `<li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"
//           stroke-linejoin="round" />
//         <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"
//           stroke-linecap="round" stroke-linejoin="round" />
//       </svg></li>`;
//   paginationLibraryRef.innerHTML = listMarkup;
//   if (localStoragePagination.currentPage === 1) {
//     AddFirstCurrentPage();
//   }
// }

// function AddFirstCurrentPage() {
//   const firstPageInListRef = document.querySelector('.pagination li');
//   console.log(firstPageInListRef);
//   firstPageInListRef.classList.add('pagination__button-current');
// }

// checkLocalStorage();
// function checkLocalStorage() {
//   if (!dataArray || dataArray.length <= LIMIT) {
//     console.log('localstorage нет информации');
//     return;
//   }

//   console.log('localstorage находится больше 20 фильмов....');

//   lastPages = Math.ceil(dataArray.length / LIMIT);
//   console.log(lastPages);
//   if (lastPages <= 7) {
//     // createArrayPages(lastPages);
//     listPage(lastPages);
//   } else {
//   }
// }

// function createPaginationLessEightPages(lastPages) {

//   createMarkupFirst(arrayAllPages);
// }
// function createArrayPages(lastPages) {
//   let arrayAllPages = [];
//   console.log(lastPages);
//   for (let i = lastPages; i > 0; i -= 1) {
//     arrayAllPages.unshift(i);
//   }
//   console.log(arrayAllPages);
//   listPage(lastPages);
//   // createMarkupFirst(arrayAllPages);
// }
