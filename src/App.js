import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal';
import { Component } from 'react';
import Spinner from './Components/Loader';

import Searchbar from './Components/Searchbar';
import pixabayApi from './services/pixabay-api';
import ButtonLoadMore from './Components/ButtonLoadMore';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    selectedImage: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    if (query !== this.state.searchQuery)
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
      .then(hits => {
        this.setState(prev => ({
          images: [...prev.images, ...hits],
          currentPage: prev.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  toggleModal = () => {
    this.setState(prev => ({
      showModal: !prev.showModal,
    }));
  };

  showLargeImage = e => {
    const selectImg = e.target.dataset.img;

    this.toggleModal();

    selectImg &&
      this.setState({
        selectedImage: selectImg,
      });
  };

  render() {
    const { images, showModal, error, isLoading, selectedImage } = this.state;
    const showSpinnerWhileLoading = images.length > 0 && !isLoading;

    return (
      <>
        {error && <h1>Ошибка, что-то пошло не так!</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {images.length > 0 && (
          <ImageGallery images={images} onSwitchModal={this.showLargeImage} />
        )}

        {isLoading && <Spinner />}

        {/* {isLoading && (
          <Loader type="Oval" color="black" height={80} width={80} />
        )} */}

        {showSpinnerWhileLoading && (
          <ButtonLoadMore loadMore={this.fetchImages} />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={selectedImage} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
