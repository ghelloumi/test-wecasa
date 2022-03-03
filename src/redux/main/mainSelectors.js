import { useSelector } from 'react-redux';

export const selectTheme = () => {
  const { theme } = useSelector((data) => data && data.mainReducer);
  return theme;
};

export const selectPrestations = () => {
  const {
    data: prestations,
    error,
    loading
  } = useSelector((rootState) => rootState && rootState.mainReducer.prestations);

  return { prestations, error, loading };
};

export const selectMessages = () => {
  const { messages } = useSelector((data) => data && data.mainReducer);

  return messages;
};
