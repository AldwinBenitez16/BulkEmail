import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "../formFields";
import SubmitSurveyModal from "./Modal/Modal";

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm entries!</h5>
      {reviewFields}
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <SubmitSurveyModal />
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    formValues: form.surveyForm.values,
  };
};

export default connect(mapStateToProps)(SurveyFormReview);
