import { ACTIONS } from './_constants';

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_BASKET: {
      const { reference, title, duration, price } = action.payload.item;
      const foundElement = state.find((item) => item.reference === reference);

      return foundElement
        ? state.map((element) =>
            element.reference === reference ? { ...element, count: element.count + 1 } : element
          )
        : [...state, { title, reference, duration, price, count: 1 }];
    }
    case ACTIONS.REMOVE_ITEM_FROM_BASKET: {
      const { reference } = action.payload;
      const foundElement = state.find((item) => item.reference === reference);
      if (foundElement.count === 1) {
        return state.filter((element) => element.reference !== reference);
      }
      return state.map((element) =>
        element.reference === reference ? { ...element, count: element.count - 1 } : element
      );
    }
    default:
      return state;
  }
};
