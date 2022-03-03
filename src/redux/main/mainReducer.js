import { ACTIONS } from './_constants';

const initialState = {
  theme: process.env.REACT_APP_THEME_1,
  prestations: {
    loading: false,
    error: null,
    data: {}
  }
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.SET_THEME:
      return {
        ...state,
        theme: action.payload.theme
      };
    case ACTIONS.GET_PRESTATIONS_LOADING:
      return {
        ...state,
        prestations: {
          ...state.prestations,
          loading: true
        }
      };
    case ACTIONS.GET_PRESTATIONS_SUCCESS:
      return {
        ...state,
        prestations: {
          data: action.payload.data,
          error: null,
          loading: false
        }
      };
    case ACTIONS.GET_PRESTATIONS_FAILURE:
      return {
        ...state,
        prestations: {
          ...state.prestations,
          loading: false,
          error: action.payload.error
        }
      };
    default:
      return state;
  }
};
