import * as basicLightbox from 'basiclightbox';
import { Overlay, ModalDiv } from './Globalstyle';

export const Modal = ({ largeImageURL, tags }) => {
  return basicLightbox.create(
    <Overlay>
      <ModalDiv>
        <img src={largeImageURL} alt={tags} />
      </ModalDiv>
    </Overlay>
  );
};
