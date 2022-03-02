import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonsGroup from '../Molecules/ButtonsGroup';
import PrestationCard from '../Molecules/PrestationCard';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PrestationsContainer = styled.div`
  margin-top: ${({ theme }) => theme.sizes.m}px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.s}px;
`;

const CategoriesTabs = ({ categoriesData }) => {
  const buttonsData = categoriesData.map(
    ({ title, reference, disabled, selected, handleClick }) => ({
      title,
      reference,
      disabled,
      selected,
      handleClick
    })
  );

  const selectedCategoryData =
    categoriesData.find((categoryData) => !!categoryData.selected)?.selectedCategoryPrestations ||
    [];

  return (
    <Container>
      <ButtonsGroup buttons={buttonsData} />
      <PrestationsContainer>
        {selectedCategoryData.map((prestation) => (
          <PrestationCard prestation={prestation} />
        ))}
      </PrestationsContainer>
    </Container>
  );
};

CategoriesTabs.propTypes = {
  categoriesData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      reference: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
      selected: PropTypes.bool.isRequired,
      handleClick: PropTypes.func.isRequired,
      selectedCategoryPrestations: PropTypes.arrayOf(
        PropTypes.shape({
          duration: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
          reference: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    })
  ).isRequired
};

export default CategoriesTabs;
