import { Component } from 'react';
import axios from 'axios';
import Notiflix from 'notiflix';
import { ImageGalleryList } from './Globalstyle';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gallery !== this.props.gallery) {
      const BASE_URL = 'https://pixabay.com/api/';
      const keyApi = '32959525-8b9ed50037adb2599dd065ad6';
      const imageType = 'photo';
      const orientationType = 'horizontal';
      const safeSearch = 'true';
      const perPage = '12';
      async function fetchImg(searchImg, page) {
        const requestArr = await axios.get(
          `${BASE_URL}?key=${keyApi}&per_page=${perPage}&q=${searchImg}&page=${page}&image_type=${imageType}&orientation=${orientationType}&safesearch=${safeSearch}}`
        );
        console.log(requestArr);

        if (requestArr.data.hits.length === 0) {
          // buttonLoadMore.hidden = true;
          Notiflix.Notify.warning(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        page += 1;
        return requestArr.data;
      }
      fetchImg()
    }
  }

  render() {
    return (
      <ImageGalleryList>
        <ImageGalleryItem images={this.state.images} />
      </ImageGalleryList>
    );
  }
}
