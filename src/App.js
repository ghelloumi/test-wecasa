import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { selectPrestations } from './redux/main/mainSelectors';
import { selectBasketItems } from './redux/basket/basketSelectors';
import Modal from './UI/Molecules/Modal';
import Basket from './UI/Atoms/Basket';
import Title from './UI/Atoms/Title';
import CategoriesTabs from './UI/Organisms/CategoriesTabs';
import { addItemToBasketAction, removeItemFromBasketAction } from './redux/basket/basketActions';
import ElementInBasket from './UI/Molecules/ElementInBasket';
import { getPrestationsServiceAction } from './redux/main/mainActions';
import { convertDurationInHours, convertToEuro, objectIsEmpty } from './Utils';

const MAN_CATEGORY = 'man';

const App = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(MAN_CATEGORY);
  const [categoriesData, setCategoriesData] = useState([]);
  const [pageTitle, setPageTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { prestations, error, loading } = selectPrestations();
  const basketItems = selectBasketItems();

  useEffect(() => {
    if (objectIsEmpty(prestations)) {
      dispatch(getPrestationsServiceAction());
    } else {
      const { categories, title } = prestations;

      setCategoriesData(
        categories
          ? categories.map(
              ({ title: currentTitle, reference, prestations: currentPrestations }) => ({
                title: currentTitle,
                reference,
                disabled: !currentPrestations.length,
                selected: selectedCategory === reference,
                handleClick: () => setSelectedCategory(reference),
                selectedCategoryPrestations: categories.find(
                  (category) => category.reference === selectedCategory
                )?.prestations
              })
            )
          : []
      );

      setPageTitle(title);
    }
  }, [prestations, selectedCategory]);

  const handleBasketClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const addElementHandler = useCallback((item) => {
    dispatch(addItemToBasketAction(item));
  }, []);

  const removeElementHandler = useCallback((reference) => {
    dispatch(removeItemFromBasketAction(reference));
  }, []);

  const basketItemsTotalPrice = basketItems.reduce(
    (prev, curr) => prev + curr.price * curr.count,
    0
  );

  const basketItemsTotalDelay = basketItems.reduce(
    (prev, curr) => prev + curr.duration * curr.count,
    0
  );

  return (
    <div className="App">
      {pageTitle && <Title>{pageTitle}</Title>}
      {categoriesData.length > 0 && <CategoriesTabs categoriesData={categoriesData} />}
      <Basket itemsCount={basketItems.length} onClick={handleBasketClick} />
      {isModalOpen && (
        <Modal
          title="Mon Panier"
          closeModal={handleCloseModal}
          rightFooter={`Total Price: ${convertToEuro(basketItemsTotalPrice)}`}
          leftFooter={`Total Delay: ${convertDurationInHours(basketItemsTotalDelay)}`}>
          {basketItems.map((el) => (
            <ElementInBasket
              key={el.reference}
              title={el.title}
              reference={el.reference}
              quantity={el.count}
              addElementHandler={addElementHandler}
              removeElementHandler={removeElementHandler}
            />
          ))}
        </Modal>
      )}
    </div>
  );
};

export default App;
