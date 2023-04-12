import moviesService from './movies-service';
import { onAddQ } from './local-storage-queue';


const KEY_CODE_ESC = "Escape";

const refs = {
    modalContainer: document.querySelector(".modal-about-movie"),
    backdrop: document.querySelector('.backdrop'),
    // closeBtn: document.querySelector('[data-close-modal="btn-modal-close-about-movie"]'),
    // openModal: document.querySelector('.movies__container'),
    openModal: document.querySelector('.movies__list')
};


if (refs.openModal) {
    refs.openModal.addEventListener('click', onOpenModalAboutMovies);


    function onOpenModalAboutMovies(e) {
        e.preventDefault();
    
    
        if (e.target.closest('.movies__item')) {
            window.addEventListener('keydown', onCloseKeyEscPress);
            refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
            document.body.classList.add("show-modal-about-movie");

            const child = e.target;
            const parent = child.closest('.movies__item');
            const currentMovieId = parent.dataset.movies;
    
            renderMovie(currentMovieId);
        }
    }
}

    function onCloseModalAboutMovies() {
        document.body.classList.remove("show-modal-about-movie");
        // refs.closeBtn.removeEventListener('click', onCloseModalAboutMovies);
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




async function renderMovie(currentMovieId) {
    try {
        const movie = await moviesService.fetchFullInfoMovie(currentMovieId);
        const createMovieMarkup = `<button class="btn-modal-close-about-movie" data-close-modal="btn-modal-close-about-movie" type="button">
            <svg class="icon-close">
                <use href="./image/img_modal-aboutMovie/symbol-defs.svg#icon-close" class="iconSVG-close"></use>
            </svg>
        </button>
 <img src="${movie.posterPath}"
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
                          <p class="characteristics-value-text"><span class="rating-movie">${movie.voteAverage}</span class="characteristic-text"><span> / </span>${movie.vote_count}
                        </p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${movie.popularity}</p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${movie.original_title}</p>
                    </li>
                    <li class="characteristics-value-element">
                        <p class="characteristics-value-text">${movie.genres}</p>
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
    

        document.querySelector('.btn-modal-close-about-movie').addEventListener('click', onCloseModalAboutMovies);
            const qBtn = document.querySelector(".btn-add-queue");
  
        // const wBtn = document.querySelector(".btn-add-watched");
        qBtn.addEventListener('click', ()=> onAddQ(currentMovieId));

 
    } catch (error) {
        console.log(error);
    }
}






