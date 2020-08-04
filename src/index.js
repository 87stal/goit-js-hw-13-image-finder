import './styles.css';
import apiService from './js/apiService';
import updateMarkupGallery from './js/updateMarkupImages';
import refs from './js/refs';
import LoadMoreBtn from './js/components/loadMoreBtn';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.inputKeyWords.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  clearGallery();
  apiService.resetPage();
  fetchImages();

  form.reset();
}
function fetchImages() {
  loadMoreBtn.disable();

  apiService.fetchImages().then(images => {
    updateMarkupGallery(images);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
    loadMoreBtn.show();
    loadMoreBtn.enable();
  });
}

function clearGallery() {
  refs.gallery.innerHTML = '';
}
