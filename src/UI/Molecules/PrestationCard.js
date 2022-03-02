import styled from 'styled-components';
import PropTypes from 'prop-types';
import { convertToEuro, displayDurationInHours } from '../../Utils';

const Container = styled.div`
  border: 1px solid;
  padding: ${({ theme }) => `${theme.sizes.xs}px ${theme.sizes.m}px`};
}`;

const Title = styled.p`
  font-weight: bold;
`;

const PrestationCard = ({ prestation }) => {
  const { duration, price, reference, title } = prestation;

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
