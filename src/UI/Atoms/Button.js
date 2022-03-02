import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonEl = styled.button`
  height: 24px;
  width: 64px;
  cursor: pointer;
`;

const Button = ({ children, handleClick }) => <ButtonEl onClick={handleClick}>{children}</ButtonEl>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func
};

Button.defaultProps = {
  handleClick: undefined
};

export default Button;
