import { useSelector } from 'react-redux';

export const selectBasketItems = () =>
  useSelector((rootState) => rootState && rootState.basketReducer);
