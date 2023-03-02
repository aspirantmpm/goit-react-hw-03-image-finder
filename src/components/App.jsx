
import { GlobalStyle } from './Globalstyle';
import { Searchbar } from './Searchbar'
import { Loader } from './Loader'
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
// import { Modal } from './Modal';

export const App = () => {
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
};
