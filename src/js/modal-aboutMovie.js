const KEY_CODE_ESC = "Escape";

const refs = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('[data-close-modal="btn-modal-close-about-movie"]'),
    openBtn: document.querySelector('[data-open-modal="open-modal"]')
};

refs.openBtn.addEventListener('click', onOpenModalAboutMovies);

function onOpenModalAboutMovies() {
    window.addEventListener('keydown', onCloseKeyEscPress);
    refs.closeBtn.addEventListener('click', onCloseModalAboutMovies);
    refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
    document.body.classList.add("show-modal-about-movie");
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

function onCloseKeyEscPress(e) {
    if (e.code === KEY_CODE_ESC) {
        onCloseModalAboutMovies();
    } 
}