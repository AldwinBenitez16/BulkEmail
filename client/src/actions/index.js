import axios from "axios";
import * as types from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("api/current_user");
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post("api/stripe", token);
  dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const submitSurvey = (values) => async (dispatch) => {
  dispatch({ type: types.SUBMIT_SURVEY });
  const res = await axios.post("/api/surveys", values);
  if (res.status === 200) {
    dispatch({ type: types.FETCH_USER, payload: res.data.user });
    dispatch({ type: types.SUBMIT_SURVEY_SUCESS, payload: res.data.survey });
  } else {
    dispatch({ type: types.SUBMIT_SURVEY_FAIL, payload: res.data });
  }
};

export const fetchSurveys = () => async (dispatch) => {
  const res = await axios.get("/api/surveys");
  dispatch({
    type: types.FETCH_SURVEYS,
    payload: res.data,
  });
};

export const resetForm = (formName, reset) => (dispatch) => {
  dispatch(reset(formName));
};
