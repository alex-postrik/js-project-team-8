setTimeout(() => {
    const KEY_CODE_ESC = "Escape";

const refs = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('[data-close-modal="btn-modal-close-about-movie"]'),
    openModal: document.querySelector('.movies__list')
};


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

    function onCloseKeyEscPress(e) {
        if (e.code === KEY_CODE_ESC) {
            onCloseModalAboutMovies();
        }
    }
}
}, 500)

