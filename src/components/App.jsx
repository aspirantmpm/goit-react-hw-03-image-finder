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

  changeState = ({ searchImg }) => {
    this.setState({ searchImg: { searchImg } })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <GlobalStyle />
        <Searchbar onSubmit={this.changeState} />
        <ImageGallery gallery={this.state.searchImg} />
        <Loader />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
