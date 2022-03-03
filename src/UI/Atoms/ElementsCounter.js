import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes.s}px;
  height: ${({ theme }) => theme.sizes.l}px;
  align-items: center;
`;

const ElementsCounter = ({ elementsCount, addElementHandler, removeElementHandler }) => (
  <Container>
    <Button handleClick={removeElementHandler} disabled={!elementsCount}>
      -
    </Button>
    <p>{elementsCount}</p>
    <Button handleClick={addElementHandler}>+</Button>
  </Container>
);

ElementsCounter.propTypes = {
  elementsCount: PropTypes.number.isRequired,
  addElementHandler: PropTypes.func.isRequired,
  removeElementHandler: PropTypes.func.isRequired
};

export default ElementsCounter;
