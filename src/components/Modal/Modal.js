import { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalSt, ModalOverlaySt, BigPhoto } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // Ставлю слухач на цикл
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  //  Знімаю слухач з цикла
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Закривання модального вікна по "Ескейпу"
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // Закривання модальноо вікна по кліку на "Бекдроп"
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <ModalOverlaySt onClick={this.handleBackdropClick}>
        <ModalSt>
          <BigPhoto src={this.props.children} alt="qwwqwe" />
        </ModalSt>
      </ModalOverlaySt>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default Modal;
