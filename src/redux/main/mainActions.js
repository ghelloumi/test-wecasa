import { ACTIONS } from './_constants';

// Themes
export const setThemeAction = (theme) => ({
  type: ACTIONS.SET_THEME,
  payload: { theme }
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

    dispatch(getPrestationsSuccessAction(data));
  } catch (error) {
    dispatch(getPrestationsFailureAction(error));
  }
};
