import imagesCardTemplate from '../templates/imagesCardTemplate.hbs';
import refs from './refs';

function updateMarkupGallery(images) {
  const markup = imagesCardTemplate(images);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}
export default updateMarkupGallery;
