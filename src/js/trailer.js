import moviesService from './movies-service';

// export function trailerWatched() {
//     const trailerBtns = document.querySelectorAll('.movies__trailer');
//       trailerBtns.forEach((btn) => {
//         btn.addEventListener('click', async (e) => {
//           e.preventDefault();
//           const movieId = e.target.dataset.id;
//           const videoKey = await moviesService.fetchVideo(movieId);
//           const videoUrl = `https://www.youtube.com/watch?v=${videoKey.key}`;
//           window.open(videoUrl);
//         });
//       });
// }

// Закриття плеєра по кнопці модалки

// export function trailerWatched() {
//   const trailerBtns = document.querySelectorAll('.movies__trailer');
//   const player = document.querySelector('.modal-about-movie');

//   trailerBtns.forEach((btn) => {
//     btn.addEventListener('click', async (e) => {
//       e.preventDefault();
//       const movieId = e.target.dataset.id;
//       const videoKey = await moviesService.fetchVideo(movieId);
//       const iframe = (`<iframe class = player name = "myframe" width = "100%" height = "400px" src = "http://www.youtube.com/embed/${videoKey.key}" allow="autoplay"></iframe>`);

//       player.insertAdjacentHTML('beforeend', iframe);

//       const closeBtn = document.querySelector('.btn-modal-close-about-movie');
//       closeBtn.addEventListener('click', () => {
//         player.innerHTML = '';
//       });
//     });
//   });
// }


//Варіант Юлі
// Закриття плеєра по окремій кнопці

// export function trailerWatched() {
//   const trailerBtns = document.querySelectorAll('.movies__trailer');
//   const player = document.querySelector('.modal-about-movie');
// trailerBtns.forEach(btn => {
//     btn.addEventListener('click', async e => {
//       e.preventDefault();
//       const movieId = e.target.dataset.id;
//       const videoKey = await moviesService.fetchVideo(movieId);
//       const iframe = `<div class = player>
//       <iframe class = player-iframe name = "myframe" width = "100%" height = "400px" src = "http://www.youtube.com/embed/${videoKey.key}" allow="autoplay"></iframe>
//       <button class="btn-modal-close-about-movie btn-close-player" data-close-modal="btn-modal-close-about-movie" type="button">
//             <svg class="icon-close" width="14" height="14" viewBox="0 0 16 16">
//                 <path d="M1 1L15 15" stroke="black" stroke-width="2"/>
//                 <path d="M1 15L15 1" stroke="black" stroke-width="2"/>
//             </svg>
//       </div>
//       `;

//       player.insertAdjacentHTML('beforeend', iframe);
// const playerIframe = document.querySelector('.player');
//       const closeBtn = document.querySelector('.btn-close-player');
//       closeBtn.addEventListener('click', () => {
//         playerIframe.classList.add('player-none');
//         playerIframe.innerHTML = '';
//       });
//     });
//   });
// }


import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export function trailerWatched() {
  const trailerBtns = document.querySelectorAll('.movies__trailer');


  trailerBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {

  const player = document.querySelector('.modal-about-movie');
  trailerBtns.forEach(btn => {
    btn.addEventListener('click', async e => {

      e.preventDefault();

      const movieId = e.target.dataset.id;
      const videoKey = await moviesService.fetchVideo(movieId);


      const iframe = `<iframe class="player-iframe" name="myframe" width="60%" height="400px" src="https://www.youtube.com/embed/${videoKey.key}" allow="autoplay"></iframe>`;

      const lightbox = basicLightbox.create(iframe, {
        onShow: (instance) => {
          
        },
      const iframe = `<div class = player>
      <iframe class = player-iframe name = "myframe" width = "100%" height = "400px" src = "https://www.youtube.com/embed/${videoKey.key}" allow="autoplay"></iframe>
      <button class="btn-modal-close-about-movie btn-close-player" data-close-modal="btn-modal-close-about-movie" type="button">
            <svg class="icon-close" width="14" height="14" viewBox="0 0 16 16">
                <path d="M1 1L15 15" stroke="black" stroke-width="2"/>
                <path d="M1 15L15 1" stroke="black" stroke-width="2"/>
            </svg>
      </div>
      `;

      player.insertAdjacentHTML('beforeend', iframe);
      const playerIframe = document.querySelector('.player');
      const closeBtn = document.querySelector('.btn-close-player');
      closeBtn.addEventListener('click', () => {
        playerIframe.classList.add('player-none');
        playerIframe.innerHTML = '';
      });

      lightbox.show();
    });
  });
}
