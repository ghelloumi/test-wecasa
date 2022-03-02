import styled from 'styled-components';
import PropTypes from 'prop-types';
import basketIcon from '../../assets/basket.png';

const Container = styled.button`
  height: ${({ theme }) => theme.sizes.xl}px;
  width: ${({ theme }) => theme.sizes.xl}px;
  padding: ${({ theme }) => theme.sizes.s}px;
  background: ${({ theme, disabled }) => theme.palette[disabled ? 'primary' : 'secondary']};
  border-radius: 40%;
  position: fixed;
  right: ${({ theme }) => theme.sizes.m}px;
  bottom: ${({ theme }) => theme.sizes.m}px;
  border: 1px solid transparent;
  cursor: pointer;
`;

const BasketIcon = styled.img`
  height: 100%;
`;

const Bullet = styled.div`
  position: absolute;
  top: -${({ theme }) => theme.sizes.xs}px;
  right: -${({ theme }) => theme.sizes.s}px;
  background: ${({ theme }) => theme.palette.warning};
  padding: ${({ theme }) => `${theme.sizes.xs}px ${theme.sizes.s}px`};
  border-radius: 50%;
  cursor: pointer;
`;

const Basket = ({ itemsCount, onClick }) => (
  <Container onClick={onClick} disabled={itemsCount === 0}>
    <BasketIcon src={basketIcon} alt="My items basket" />
    {itemsCount > 0 && <Bullet>{itemsCount}</Bullet>}
  </Container>
);

Basket.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Basket;
