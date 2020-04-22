import React from "react";

const SuccessBody = ({ message }) => {
  return (
    <div className="modal-content align-center">
      <h4>Error</h4>
      <p>We Apologize!</p>
      <p>The Survey Could Not Be Sent At This Time</p>
      <p>{message}</p>
    </div>
  );
};

export default SuccessBody;
