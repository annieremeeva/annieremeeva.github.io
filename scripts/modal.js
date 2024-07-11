const modal = document.querySelector('.js-modal');
const modalBackdrop = document.querySelector('.js-modal-backdrop');

const hireButton = document.querySelector('.js-hire-button');
const closeButton = document.querySelector('.js-close-button');

hireButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modalBackdrop.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
});

modalBackdrop.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalBackdrop.classList.add('hidden');
})