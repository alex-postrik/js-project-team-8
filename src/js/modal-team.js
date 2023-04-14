import { teamItem } from './storage-team';
import * as basicLightbox from 'basiclightbox';

const refs = {
  openModalBtn: document.querySelector('.footer-students-btn'),
};

function createUnit(data) {
  return data
    .map(({ name, title, previewImg, svg, position, gitHub, lin }) => {
      return `<div class="unit">
      <div class="wraper-img">
      <img src="${previewImg}" alt="${name}" title="${title}" class="unit-img" />
      <a href="${gitHub}"><img src="${svg}" alt="${name}" title="${title}" class="unit-svg" />

      </a>
      </div>
    <p class="unit-info name"> ${name}</p>
    <p class="unit-info role"> ${position}</p>
</div>`;
    })
    .join('');
}

refs.openModalBtn.addEventListener('click', openModal);
const markup = createUnit(teamItem);
const modal =
  basicLightbox.create(`<div class="container"><div class="close-container">
  <div class="leftright"></div>
  <div class="rightleft"></div>
  <label class="close">close</label>
</div><div class="modal-team"> <div  class="modal-title-content"><h2 class="modal-title-team">JS-PROJECT-TEAM</h2><span class="modal-img-team"></span></div><div class="wrap-modal-team">
${markup}</div>
</div></div>`);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
