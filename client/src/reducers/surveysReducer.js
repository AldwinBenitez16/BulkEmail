import * as actionTypes from "../actions/types";
const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
};
