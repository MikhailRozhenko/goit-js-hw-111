// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

function showError(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
    timeout: 1500,
    pauseOnHover: true,
    close: true,
  });
}

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const input = event.target.elements.search.value;

  if (input.trim() === '') {
    showError(
      'Sorry, there are no images matching your search query. Please try again!'
    );
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(input)
    .then(data => {
      if (!data || data.hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      }

      return data;
    })
    .then(data => {
      if (data) {
        createGallery(data.hits);
      }
    })
    .finally(() => {
      hideLoader();
    });
});
