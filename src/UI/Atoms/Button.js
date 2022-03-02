import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defaultColor, palettePropTypes } from '../../config/theme';

const ButtonEl = styled.button`
  height: ${({ theme }) => theme.sizes.m + theme.sizes.s}px;
  width: ${({ theme }) => theme.sizes.xl}px;
  background: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`;

const Button = ({ children, handleClick, color }) => (
  <ButtonEl onClick={handleClick} color={color}>
    {children}
  </ButtonEl>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(palettePropTypes)
};

Button.defaultProps = {
  handleClick: undefined,
  color: defaultColor
};

export default Button;
