import axios from 'axios';

export const fetchImages = (searchQuery = '', currentPage = 1) => {
  const API_KEY = '20244739-961dea85be28be305e8bcd893';
  const BASE_URL = 'https://pixabay.com/api';

  axios.defaults.baseURL = BASE_URL;

  const url = `?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(res => res.data.hits);
};

export default { fetchImages };
