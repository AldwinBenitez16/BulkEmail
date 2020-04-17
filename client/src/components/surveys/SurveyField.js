import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label className="black-text" style={{ fontSize: "18px" }}>
        {label}
      </label>
      <div className="red-text" style={{ fontSize: "12px" }}>
        {touched && error}
      </div>
      <input {...input} style={{ marginBottom: "5px" }} />
    </div>
  );
};

export default SurveyField;
