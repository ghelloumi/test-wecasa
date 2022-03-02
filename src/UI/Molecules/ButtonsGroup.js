import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Atoms/Button';

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.xs}px;
`;

const ButtonsGroup = ({ buttons }) => (
  <Container>
    {buttons.map(({ title, reference, disabled, selected, handleClick }) => (
      <Button key={reference} disabled={disabled} handleClick={handleClick} selected={selected}>
        {title}
      </Button>
    ))}
  </Container>
);

ButtonsGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
      selected: PropTypes.bool.isRequired,
      handleClick: PropTypes.func.isRequired
    })
  ).isRequired
};

export default ButtonsGroup;
