import moviesService from './movies-service';
import { onAddQ } from './local-storage-queue';

import { trailerWatched } from './trailer';

import { onAddW } from './addToWatched';

import imageNoMovie from '../image/img_modal-aboutMovie/No-Image-Placeholder.jpg'

import { renderMoviesQueue } from './button-queue';
import { renderMoviesWatched } from './button-queue';

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
            if (refs.backdrop) {
                refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
                document.body.classList.add("show-modal-about-movie");

                const child = e.target;
                const parent = child.closest('.movies__item');
                const currentMovieId = parent.dataset.movies;
        
                renderMovie(currentMovieId);
            }
            // refs.backdrop.addEventListener('click', onCloseModalAboutMoviesClickBackdrop);
            
        
        }
    }
}

    function onCloseModalAboutMovies() {
        document.body.classList.remove("show-modal-about-movie");
        // refs.closeBtn.removeEventListener('click', onCloseModalAboutMovies);
        refs.backdrop.removeEventListener('click', onCloseModalAboutMoviesClickBackdrop);
        window.removeEventListener('keydown', onCloseKeyEscPress);        
    if (window.location.href.indexOf('library.html') > -1) {
    // пользователь находится на странице library.html
    if (queueBtn.classList.contains('header-movie-btn--active')) {
      renderMoviesQueue();
    } else if (watchedBtn.classList.contains('header-movie-btn--active')) {
        renderMoviesWatched();
        console.log('safasf');
    }
  }
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
        const Q_KEY = 'movies in queue';
        const movieCheck = localStorage.getItem(Q_KEY);
        const W_KEY = 'movies in watched';
        const movieChecked = localStorage.getItem(W_KEY);
        const movie = await moviesService.fetchFullInfoMovie(currentMovieId);

        console.log('movie',movie)
        if (movie.posterPath === "https://image.tmdb.org/t/p/w500null") {
            movie.posterPath = imageNoMovie;
         }

        const createMovieMarkup = `<button class="btn-modal-close-about-movie" data-close-modal="btn-modal-close-about-movie" type="button">
            <svg class="icon-close" width="14" height="14" viewBox="0 0 16 16">
                <path d="M1 1L15 15" stroke="black" stroke-width="2"/>
                <path d="M1 15L15 1" stroke="black" stroke-width="2"/>
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
            <div class="container-trailer-btn"><button class="movies__trailer" type="button">Trailer</button></div>
            
        </div>
`;
      
        refs.modalContainer.innerHTML = createMovieMarkup;
        const qBtn = document.querySelector(".btn-add-queue");
        if (movieCheck) {
            if (movieCheck.includes(currentMovieId))
                qBtn.textContent = 'remove from queque';
       }
        qBtn.addEventListener('click', ()=> onAddQ(currentMovieId));
        console.log(qBtn.textContent);
     origin/searchMain
        const trailerBtn =document.querySelector('.movies__trailer');
        trailerWatched(trailerBtn);


            const addWatchedBtn = document.querySelector('.btn-add-watched');
         if (movieChecked) {
            if (movieChecked.includes(currentMovieId))
                addWatchedBtn.textContent = 'remove from watched';
       }

        addWatchedBtn.addEventListener('click', () =>onAddW(currentMovieId));
console.log(addWatchedBtn.textContent);


        
       
    

        document.querySelector('.btn-modal-close-about-movie').addEventListener('click', onCloseModalAboutMovies);
     
  
        // const wBtn = document.querySelector(".btn-add-watched");
       

 
    } catch (error) {
        console.log(error);
    }
}






