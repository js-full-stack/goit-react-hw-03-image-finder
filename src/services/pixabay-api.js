import axios from 'axios';

export const fetchImages = (searchQuery = '', currentPage = 1) => {
  const apiKey = '20244739-961dea85be28be305e8bcd893';
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(res => res.data.hits);
};

export default { fetchImages };
