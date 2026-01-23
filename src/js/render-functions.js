// Описаний у документації
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `
        <li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
          </a>
          <div class="info">
            <p><b>Likes:</b> ${img.likes}</p>
            <p><b>Views:</b> ${img.views}</p>
            <p><b>Comments:</b> ${img.comments}</p>
            <p><b>Downloads:</b> ${img.downloads}</p>
          </div>
        </li>
      `;
    })
    .join('');

  refs.ulForm.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // оновлюємо SimpleLightbox
}

export function clearGallery() {
  refs.ulForm.innerHTML = '';
}

export function showLoader() {
  refs.loaderForm.classList.remove('hidden');
}
export function hideLoader() {
  refs.loaderForm.classList.add('hidden');
}
