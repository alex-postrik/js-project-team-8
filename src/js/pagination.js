import moviesService from './movies-service';
import { createMovieCardMarkup } from './card';

export const FOR_POPULAR = 1;
export const FOR_SEARCH = 2;
export let param = 1;

// function testPaginetion() {
//   moviesService.fetchPopularMovies().then((movies) => {
//     console.log(movies);
//     //console.log(moviesService.page);
//     //console.log(moviesService.allPages);

//     renderPagination(moviesService.page, moviesService.allPages);
//   });
// }

//testPaginetion();

export const paginationRef = document.querySelector('.pagination');

paginationRef.addEventListener('click', onPaginationClick);

function onPaginationClick(e) {
  if (e.target.textContent === '...') return;

  if (e.target.classList.contains('arrow-left')) moviesService.subtractPage();
  if (e.target.classList.contains('arrow-right')) moviesService.addPage();
  if (e.target.classList.contains('pagination__button'))
    moviesService.page = Number(e.target.textContent);

  if (param === 1) {
    moviesService.fetchPopularMovies().then(movies => {
      createMovieCardMarkup(movies);
      renderPagination(moviesService.page, moviesService.allPages, param);
    });
  } else {
    moviesService.fetchSearchMovies().then(movies => {
      createMovieCardMarkup(movies);
      renderPagination(moviesService.page, moviesService.allPages, param);
    });
  }
  scrollToTop();
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

export function renderPagination(page, pages, curParam) {
  let markup = '';
  param = curParam;
  if (!page || page > pages) return;

  if (page > 1)
    markup += `<li class="pagination__arrow-left arrow-left"><svg class="arrow-left" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6666 8H3.33331" stroke="black" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M7.99998 12.6666L3.33331 7.99998L7.99998 3.33331" stroke="black" stroke-width="1.33333"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg></li>`;

  if (page > 1)
    markup += `<li class="pagination__button pagination__button-end">1</li>`;

  if (page > 4) markup += `<li class="pagination__points">...</li>`;

  if (page > 3) markup += `<li class="pagination__button">${page - 2}</li>`;

  if (page > 2) markup += `<li class="pagination__button">${page - 1}</li>`;

  markup += `<li class="pagination__button pagination__button-current">${page}</li>`;

  if (page + 1 < pages)
    markup += `<li class="pagination__button">${page + 1}</li>`;

  if (page + 2 < pages)
    markup += `<li class="pagination__button">${page + 2}</li>`;

  if (page + 4 < pages) markup += `<li class="pagination__points">...</li>`;

  if (page < pages)
    markup += `<li class="pagination__button pagination__button-end">${pages}</li>`;

  if (page < pages)
    markup += `<li class="pagination__arrow-right arrow-right scroll-top"><svg class="arrow-right" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33335 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round"
          stroke-linejoin="round" />
        <path d="M8.00002 12.6666L12.6667 7.99998L8.00002 3.33331" stroke="black" stroke-width="1.33333"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg></li>`;

  paginationRef.innerHTML = markup;
}
