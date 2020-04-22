import React from "react";
import Spinner from "../../../../UI/Spinner";

const LoadingSurvey = () => {
  return (
    <div className="modal-content align-center">
      <h4>Sending Survey</h4>
      <Spinner />
    </div>
  );
};

export default LoadingSurvey;
