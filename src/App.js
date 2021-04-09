import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal';
import { Component } from 'react';

// const baseUrl = 'https://pixabay.com/api/';
// const apiKey = '20244739-961dea85be28be305e8bcd893';
// const httpRequest = `${baseUrl}?=что_искать&page=номер_страницы&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
  };

  render() {
    return (
      <>
        <ImageGallery />
      </>
    );
  }
}

export default App;
