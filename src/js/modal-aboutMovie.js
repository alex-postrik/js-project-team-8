setTimeout(() => {
    const KEY_CODE_ESC = "Escape";

const refs = {
    modalContainer: document.querySelector(".modal-about-movie"),
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('[data-close-modal="btn-modal-close-about-movie"]'),
<<<<<< local-storage-q
    openModal: document.querySelector('.movies__container')
=======
    openModal: document.querySelector('.movies__list')
>>>>>> main
};


<<<<<< local-storage-q
function onOpenModalAboutMovies(e) {
        if (e.target.nodeName !== 'IMG') {
            return;
        }
    e.preventDefault();
    
    window.addEventListener('keydown', onCloseKeyEscPress);
    // refs.closeBtn.addEventListener('click', onCloseModalAboutMovies);
    refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
    document.body.classList.add("show-modal-about-movie");
    console.log(e.target)

    {
    
}
    // renderMovie();
}
function renderMovie(movie) {
    const createMovieMarkup = ` <button class="btn-modal-close-about-movie" data-close-modal="btn-modal-close-about-movie" type="button">
            <svg class="icon-close">
                <use href="./image/img_modal-aboutMovie/symbol-defs.svg#icon-close"></use>
            </svg>
        </button>
 <img src="${movie.src}"
            alt="images-movie" class="images-movie-modal">
<div class="about-movie">
<h1 class="name-movie">${movie.title}</h1>
            <div class="characteristics-container">
                <ul class="characteristics-list">
                    <li class="characteristics-element">
                        <p class="characteristic-text">Vote / Votes </p>
                    </li>
                    <li class="characteristics-element">
                        <p class="characteristic-text">Popularity</p>
                    </li>
                    <li class="characteristics-element">
                        <p class="characteristic-text">Original Title</p>
                    </li>
                    <li class="characteristics-element">
                        <p class="characteristic-text">Genre</p>
                    </li>
                </ul>
                <ul class="characteristics-value-list">
                    <li class="characteristics-value-element">
                          <p class="characteristics-value-text"><span class="rating-movie">${movie.vote_average}</span class="characteristic-text"><span> / </span>${movie.vote_count}
                        </p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${movie.popularity}</p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${movie.original_title}</p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${genreIds}</p>
                    </li>
                </ul>

            </div>
            <p class="about-text">About</p>
            <p class="about-movie-text">${movie.overview}
            </p>
 <div class="btn-container">
                <button class="btn-add-watched" type="button">add to Watched</button>
                <button class="btn-add-queue" type="button">add to queue</button>
            </div>
        </div>
`;
    refs.modalContainer.innerHTML = createMovieMarkup; 
}

function onCloseModalAboutMovies() {
    document.body.classList.remove("show-modal-about-movie");
    // refs.closeBtn.removeEventListener('click', onCloseModalAboutMovies);
    refs.backdrop.removeEventListener('click', onCloseModalAboutMoviesClickBackdrop);
    window.removeEventListener('keydown', onCloseKeyEscPress);
}
=======
// console.log(refs.openModal);

if (refs.openModal) {
    refs.openModal.addEventListener('click', onOpenModalAboutMovies);

    function onOpenModalAboutMovies(e) {
        for (let i = 0; i < refs.openModal.children.length; i++){
            if (e.target.parentNode.classList.contains("movies__thumb") || e.target.parentNode.classList.contains("movies__desc")) {
                window.addEventListener('keydown', onCloseKeyEscPress);
                refs.closeBtn.addEventListener('click', onCloseModalAboutMovies);
                refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
                document.body.classList.add("show-modal-about-movie");
                return;
            }
        }

    }

    function onCloseModalAboutMovies() {
        document.body.classList.remove("show-modal-about-movie");
        refs.closeBtn.removeEventListener('click', onCloseModalAboutMovies);
        refs.backdrop.removeEventListener('click', onCloseModalAboutMoviesClickBackdrop);
        window.removeEventListener('keydown', onCloseKeyEscPress);
    }

    function onCloseModalAboutMoviesClickBackdrop(e) {
        if (e.currentTarget === e.target) {
            onCloseModalAboutMovies();
        }
    }
>>>>>> main

    function onCloseKeyEscPress(e) {
        if (e.code === KEY_CODE_ESC) {
            onCloseModalAboutMovies();
        }
    }
}
}, 500)

