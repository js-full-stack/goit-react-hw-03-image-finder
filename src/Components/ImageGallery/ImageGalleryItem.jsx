import './ImageGallery.scss';

const ImageGalleryItem = ({ alt, id, miniImage }) => {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={miniImage} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
