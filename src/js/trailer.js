import moviesService from "./movies-service";

export function trailerWatched() {
    const trailerBtns = document.querySelectorAll('.movies__trailer');
      trailerBtns.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          const movieId = e.target.dataset.id;
          const videoKey = await moviesService.fetchVideo(movieId);
          const videoUrl = `https://www.youtube.com/watch?v=${videoKey.key}`;
          window.open(videoUrl);
        });
      });
}