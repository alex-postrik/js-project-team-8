const body = document.querySelector('body');
const check = document.querySelector('#theme-switch-toggle');
const footer = document.querySelector('.footer');
const footerText = document.querySelector('.footer-text');
const footerBtn = document.querySelector('.footer-students-btn');
// const modalTheme = document.querySelector('.modal-devs__overlay');

check.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const light = Theme.LIGHT;
const dark = Theme.DARK;
const saveLocalStorage = localStorage.getItem('Theme');

if (saveLocalStorage === 'dark-theme') {
  check.checked = true;
  body.classList.add('dark-theme');
}
function onChangeTheme() {
  if (check.checked) {
    localStorage.setItem('Theme', dark);
    body.classList.add('dark-theme');
  } else {
    localStorage.setItem('Theme', light);
    body.classList.remove('dark-theme');
  }
}
