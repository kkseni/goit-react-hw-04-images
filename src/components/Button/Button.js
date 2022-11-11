import PropTypes from 'prop-types';

import { ButtonSt, ContainerBtn } from './Button.styled';
// import Loader from 'components/Loader';

const Button = ({ onClick }) => {
  return (
    <ContainerBtn>
      <ButtonSt onClick={onClick}>Load more</ButtonSt>
    </ContainerBtn>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
