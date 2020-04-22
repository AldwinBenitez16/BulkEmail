import * as actionTypes from "../actions/types";
const initialState = {
  surveys: [],
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      return {
        ...state,
        surveys: action.payload,
      };
    case actionTypes.SUBMIT_SURVEY:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.SUBMIT_SURVEY_SUCESS:
      const surveys = [...state.surveys];
      surveys.push(action.payload);
      return {
        ...state,
        surveys,
        loading: false,
      };
    case actionTypes.SUBMIT_SURVEY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
