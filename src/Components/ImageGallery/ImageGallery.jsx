// import ImageGalleryItem from './ImageGalleryItem';
import Searchbar from '../Searchbar';
import { Component } from 'react';
import axios from 'axios';
const apiKey = '20244739-961dea85be28be305e8bcd893';

class imageGallery extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?key=${apiKey}&q=yellow+flowers&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) =>
        this.setState({
          images: data.hits,
        }),
      );
  }

  onChangeQuery = query => {
    console.log(query);
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />

        <ul>
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default imageGallery;
