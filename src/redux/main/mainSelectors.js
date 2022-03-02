import { useSelector } from 'react-redux';

export const selectPrestations = () => {
  const {
    data: prestations,
    error,
    loading
  } = useSelector((rootState) => rootState && rootState.mainReducer.prestations);

  return { prestations, error, loading };
};
