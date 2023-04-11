const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "your_api_key_here";

const KEY_CODE_ESC = "Escape";

const refs = {
  backdrop: document.querySelector(".backdrop"),
  closeBtn: document.querySelector(
    '[data-close-modal="btn-modal-close-about-movie"]'
  ),
  modalContent: document.querySelector(".modal-content"),
  openModal: document.querySelectorAll(".movies__item"),
};

refs.openModal.forEach((modal) => {
  modal.addEventListener("click", onOpenModalAboutMovies);
});

async function fetchFullInfoMovie(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = await response.data;

    const {
      backdrop_path,
      title,
      genres,
      id,
      popularity,
      vote_average,
      vote_count,
      overview,
      original_title,
    } = data;

    const movie = {
      backdrop_path: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
      title,
      genres: genres.map((genre) => genre.name).join(", "),
      id,
      popularity,
      vote_average,
      vote_count,
      overview,
      original_title,
    };

    return movie;
  } catch (error) {
    console.error(error);
  }
}

async function onOpenModalAboutMovies(event) {
  const movieId = event.currentTarget.dataset.movieId;

  const movie = await fetchFullInfoMovie(movieId);

  const modalMarkup = `
    <img class="modal-img" src="${movie.backdrop_path}" alt="${movie.title}">
    <h2 class="modal-title">${movie.title}</h2>
    <p class="modal-genres"><span class="modal-genres-label">Genres:</span> ${movie.genres}</p>
    <p class="modal-overview"><span class="modal-overview-label">Overview:</span> ${movie.overview}</p>
    <p class="modal-popularity"><span class="modal-popularity-label">Popularity:</span> ${movie.popularity}</p>
    <p class="modal-vote-average"><span class="modal-vote-average-label">Vote Average:</span> ${movie.vote_average}</p>
    <p class="modal-vote-count"><span class="modal-vote-count-label">Vote Count:</span> ${movie.vote_count}</p>
    <p class="modal-original-title"><span class="modal-original-title-label">Original Title:</span> ${movie.original_title}</p>
  `;

  refs.modalContent.innerHTML = modalMarkup;

  window.addEventListener("keydown", onCloseKeyEscPress);
  refs.closeBtn.addEventListener("click", onCloseModalAboutMovies);
  refs.backdrop.addEventListener("click", onCloseModalAboutMoviesClickBackdrop);
  document.body.classList.add("show-modal-about-movie");
}

function onCloseModalAboutMovies() {
  document.body.classList.remove("show-modal-about-movie");
  refs.closeBtn.removeEventListener("click", onCloseModalAboutMovies);
  refs.backdrop.removeEventListener(
    "click",
    onCloseModalAboutMoviesClickBackdrop
  );
  window.removeEventListener("keydown", onCloseKeyEscPress);
}

function onCloseModalAboutMoviesClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModalAboutMovies();
  }
}

function onCloseKeyEscPress(e) {
    if (e.code === KEY_CODE_ESC) {
        onCloseModalAboutMovies();
    }
}
 
