import * as actionTypes from "../actions/types";
const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};
