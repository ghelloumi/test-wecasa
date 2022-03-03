import styled from 'styled-components';
import PropTypes from 'prop-types';
import ElementsCounter from '../Atoms/ElementsCounter';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ElementInBasket = ({
  title,
  reference,
  quantity,
  addElementHandler,
  removeElementHandler
}) => (
  <Container>
    <p>{title}</p>
    <ElementsCounter
      addElementHandler={() => addElementHandler({ title, reference })}
      removeElementHandler={() => removeElementHandler(reference)}
      elementsCount={quantity}
    />
  </Container>
);

ElementInBasket.propTypes = {
  title: PropTypes.string.isRequired,
  reference: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  addElementHandler: PropTypes.func.isRequired,
  removeElementHandler: PropTypes.func.isRequired
};

export default ElementInBasket;
