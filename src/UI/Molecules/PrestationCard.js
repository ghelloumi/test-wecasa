import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertToEuro, displayDurationInHours } from '../../Utils';
import Button from '../Atoms/Button';

const Container = styled.div`
  border: 1px solid;
  padding: ${({ theme }) => `${theme.sizes.xs}px ${theme.sizes.m}px`};
}`;

const Title = styled.p`
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PrestationCard = ({ prestation }) => {
  const { duration, price, reference, title } = prestation;

  const handleAddItem = () => {
    console.log(reference);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <p>
        Price:
        <span> {convertToEuro(price)}</span>
      </p>
      <p>
        Title:
        <span> {title}</span>
      </p>
      <p>
        Duration:
        <span> {displayDurationInHours(duration)}</span>
      </p>
      <ButtonContainer>
        <Button color="info" handleClick={handleAddItem}>
          Ajouter au panier
        </Button>
      </ButtonContainer>
    </Container>
  );
};

PrestationCard.propTypes = {
  prestation: PropTypes.shape({
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    reference: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default PrestationCard;
