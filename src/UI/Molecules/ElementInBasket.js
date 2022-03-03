import styled from 'styled-components';
import PropTypes from 'prop-types';
import ElementsCounter from '../Atoms/ElementsCounter';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ElementInBasket = ({ name, quantity }) => {
  const addElementHandler = () => {
    console.log('add element');
  };

  const removeElementHandler = () => {
    console.log('remove element');
  };

  return (
    <Container>
      <p>{name}</p>
      <ElementsCounter
        addElementHandler={addElementHandler}
        removeElementHandler={removeElementHandler}
        elementsCount={quantity}
      />
    </Container>
  );
};

ElementInBasket.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default ElementInBasket;
