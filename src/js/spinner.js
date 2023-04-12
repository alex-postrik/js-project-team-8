const spinner = document.querySelector('.spinner');
// function showSpinner() {
//   spinner.style.display = 'block';
// }

// function hiddenSpinner() {
//   spinner.style.display = 'none';
// }


// const refs = { loader: document.querySelector('.spinner') };

function removeLoader() {
  spinner.classList.add('loader-hidden');
}

function addLoader() {
  spinner.classList.remove('loader-hidden');
}

document.addEventListener('readystatechange', onPageLoadingSpinner);

export default function onPageLoadingSpinner() {
  const imgRef = document.querySelector('.movies__img');

  addLoader();
  if (document.readyState === 'complete') {
    setTimeout(removeLoader, 1000);
  }
}

function showSpinner() {
  spinner.style.display = 'flex';
}

function hiddenSpinner() {
  spinner.style.display = 'none';
}

hiddenSpinner();
