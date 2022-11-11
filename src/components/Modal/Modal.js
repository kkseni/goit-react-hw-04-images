import { useEffect, useContext } from 'react';
import { createPortal } from 'react-dom';
import { CounterContext } from 'components/App/App';
import { ModalSt, ModalOverlaySt, BigPhoto } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  // Пропси
  const { closeModal, largeImageURL } = useContext(CounterContext);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Закривання модального вікна по "Ескейпу"
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  // Закривання модального вікна по кліку на "Бекдроп"
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlaySt onClick={handleBackdropClick}>
      <ModalSt>
        <BigPhoto src={largeImageURL} alt="Photo" />
      </ModalSt>
    </ModalOverlaySt>,
    modalRoot
  );
};

export default Modal;
