import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonsGroup from '../Molecules/ButtonsGroup';

const Container = styled.div``;
const PrestationsContainer = styled.div``;

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
          <p>{prestation.title}</p>
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
        })
      )
    })
  ).isRequired
};

export default CategoriesTabs;
