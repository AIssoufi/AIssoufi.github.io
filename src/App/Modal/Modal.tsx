import { createPortal } from 'react-dom';

import {
  CloseButton,
  ConfirmButton,
  Container,
  ModalBody,
  ModalHeader,
  Overlay,
} from './Modal.styled';

interface ModalProps {
  displayModal: boolean;
  onClose: () => void;
}

const Modal = ({ displayModal, onClose }: ModalProps) => {
  if (!displayModal) return null;
  return createPortal(
    <Overlay>
      <Container>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <p>Ce site est toujours en développement et sera bientôt terminé !</p>
          <ConfirmButton
            type="button"
            onClick={onClose}
          >
            J'ai compris
          </ConfirmButton>
        </ModalBody>
      </Container>
    </Overlay>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
