const keyApi = '17718415-abf6596e447b0ee9bedcd0b67';
export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyApi}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        data.hits;
        this.incrementPage();
        return data.hits;
      });
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
