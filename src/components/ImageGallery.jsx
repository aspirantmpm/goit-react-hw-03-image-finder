import { ImageGalleryList } from './Globalstyle';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      <ImageGalleryItem images={images} />
    </ImageGalleryList>
  );
};
