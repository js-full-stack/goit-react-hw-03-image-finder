import ImageGalleryItem from './ImageGalleryItem';
import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { images, onSwitchModal } = this.props;

    return (
      <>
        <ul className="ImageGallery">
          {images.map(({ tags, id, webformatURL, largeImageURL }) => {
            return (
              <ImageGalleryItem
                onClick={onSwitchModal}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                alt={tags}
                key={id}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

ImageGallery.defaultProps = {
  onToggleModal: () => null,
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }),
  ),
  onSwitchModal: PropTypes.func.isRequired,
};

export default ImageGallery;
