import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from '../Searchbar';
import Loader from 'react-loader-spinner';

import { Component } from 'react';
import pixabayApi from '../../services/pixabay-api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ButtonLoadMore from '../ButtonLoadMore/';
class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });
    pixabayApi
      .fetchImages(searchQuery, currentPage)
      .then(hits =>
        this.setState(prev => ({
          images: [...prev.images, ...hits],
          currentPage: prev.currentPage + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  render() {
    const { images, isLoading, error } = this.state;
    const showSpinnerWhileLoading = images.length > 0 && !isLoading;

    return (
      <>
        {error && <h1>Ошибка, что-то пошло не так!</h1>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ul className="ImageGallery">
          {images.map(({ tags, id, webformatURL }) => (
            <ImageGalleryItem miniImage={webformatURL} alt={tags} key={id} />
          ))}
        </ul>
        {isLoading && <Loader />}

        {showSpinnerWhileLoading && (
          <ButtonLoadMore loadMore={this.fetchImages} />
        )}
      </>
    );
  }
}

export default ImageGallery;
