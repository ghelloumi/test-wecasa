import { ACTIONS } from './_constants';

// Themes
export const setThemeAction = (theme) => ({
  type: ACTIONS.SET_THEME,
  payload: { theme }
});

// Message box
export const showMessageBoxAction = (data) => ({
  type: ACTIONS.SHOW_MESSAGE_BOX,
  payload: { data }
  // Data Example:
  // {
  // 	delay: 200000,
  // 	type: 'error',
  // 	message: 'message3',
  // }
});

export const removeMessageBoxAction = (id) => ({
  type: ACTIONS.REMOVE_MESSAGE_BOX,
  payload: { id }
});

// Load Prestations
const getPrestationsLoadingAction = () => ({
  type: ACTIONS.GET_PRESTATIONS_LOADING
});

const getPrestationsSuccessAction = (data) => ({
  type: ACTIONS.GET_PRESTATIONS_SUCCESS,
  payload: { data }
});

const getPrestationsFailureAction = (error) => ({
  type: ACTIONS.GET_PRESTATIONS_FAILURE,
  payload: { error }
});

export const getPrestationsServiceAction = () => async (dispatch) => {
  dispatch(getPrestationsLoadingAction());

  try {
    const params = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      cache: 'default'
    };

    const response = await fetch(process.env.REACT_APP_PRESTATIONS_API_URI, params);
    const data = await response.json();

    dispatch(
      showMessageBoxAction({
        type: 'success',
        message: 'Données recupérés avec succès',
        withProgress: true
      })
    );

    dispatch(getPrestationsSuccessAction(data));
  } catch (error) {
    dispatch(
      showMessageBoxAction({
        type: 'error',
        message: 'Erreur de chargement de données',
        withProgress: true
      })
    );

    dispatch(getPrestationsFailureAction(error));
  }
};
