import { GalleryItem, GalleryItemImage } from './Globalstyle';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
