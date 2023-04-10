export let watchedBtn = null;
export let queueBtn = null;

function initButtons() {
  watchedBtn = document.querySelector('button[data-id="watched-btn"]');
  queueBtn = document.querySelector('button[data-id="queue-btn"]');

  if (watchedBtn && queueBtn) {
    watchedBtn.addEventListener('click', () => {
      watchedBtn.classList.add('header-movie-btn--active');
      queueBtn.classList.remove('header-movie-btn--active');
    });

    queueBtn.addEventListener('click', () => {
      queueBtn.classList.add('header-movie-btn--active');
      watchedBtn.classList.remove('header-movie-btn--active');
    });
  }
}
// викликаємо initButtons, коли сторінка повністю завантажена
window.addEventListener('load', initButtons);
