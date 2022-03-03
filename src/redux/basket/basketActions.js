import { ACTIONS } from './_constants';

export const addItemToBasketAction = (item) => ({
  type: ACTIONS.ADD_ITEM_TO_BASKET,
  payload: { item }
});

export const removeItemFromBasketAction = (reference) => ({
  type: ACTIONS.REMOVE_ITEM_FROM_BASKET,
  payload: { reference }
});
