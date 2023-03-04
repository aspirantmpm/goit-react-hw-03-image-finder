import { Component } from 'react';
import { GlobalStyle } from './Globalstyle';
import { Searchbar } from './Searchbar';
import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
// import { Modal } from './Modal';

export class App extends Component {
  state = {
    searchImg: '',
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
