import styled from 'styled-components';
import PropTypes from 'prop-types';
import { defaultColor, palettePropTypes } from '../../config/theme';

const ButtonEl = styled.button`
  padding: ${({ theme }) => theme.sizes.s}px;
  background: ${({ theme, color }) => theme.palette[color]};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.palette.border};
  text-transform: uppercase;
  font-size: 0.6rem;

  ${({ theme, disabled }) =>
    disabled &&
    `
    background: ${theme.palette.disabled};
    pointer-events: none;
  `}

  ${({ theme, selected }) =>
    selected &&
    `
    background: ${theme.palette.secondary};
  `}
`;

const Button = ({ children, handleClick, color, disabled, selected }) => (
  <ButtonEl onClick={handleClick} color={color} disabled={disabled} selected={selected}>
    {children}
  </ButtonEl>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  color: PropTypes.oneOf(palettePropTypes),
  disabled: PropTypes.bool,
  selected: PropTypes.bool
};

Button.defaultProps = {
  handleClick: undefined,
  color: defaultColor,
  disabled: false,
  selected: false
};

export default Button;
