import { createPortal } from 'react-dom';

import './Modal.css';

interface ModalProps {
  displayModal: boolean;
  onClose: () => void;
}

const Modal = ({ displayModal, onClose }: ModalProps) => {
  if (!displayModal) return null;
  return createPortal(
    <div className="modal-comp">
      <div className="container">
        <header>
          <button onClick={onClose}>&times;</button>
        </header>
        <main>
          <p>Ce site est toujours en développement et sera bientôt terminé !</p>
          <button
            type="button"
            onClick={onClose}
          >
            J'ai compris
          </button>
        </main>
      </div>
    </div>,
    document.getElementById('modal-root') as Element,
  );
};

export default Modal;
