import styled from 'styled-components';
import PropTypes from 'prop-types';
import ThemeChanger from '../Molecules/ThemeChanger';
import Title from '../Atoms/Title';

const Container = styled.div`
  margin-bottom: 32px;
`;

const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <ThemeChanger />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
