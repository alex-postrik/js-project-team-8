import { scrollToTop } from '../utils/scrollToTop';
import { dataArray, сutData } from './renderMovies';
import { LIMIT } from './variable';

export let dataArray;
export const paginationLibraryRef = document.querySelector('.pagination');

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

export function renderPagination() {
  let markup = '';

  localStoragePagination.lastPages = Math.ceil(dataArray.length / LIMIT);

  if (dataArray.length <= LIMIT) {
    localStoragePagination.resetPage();
  }

  const lastPages = localStoragePagination.getlastPages();
  const currentPage = localStoragePagination.getcurrentPage();

  if (currentPage > lastPages) {
    localStoragePagination.currentPage = localStoragePagination.lastPages;
  }

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
