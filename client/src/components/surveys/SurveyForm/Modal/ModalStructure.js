import React, { Component } from "react";
import { connect } from "react-redux";

import SuccessBody from "./ModalBody/SuccessBody";
import LoadingBody from "./ModalBody/LoadingBody";
import ErrorBody from "./ModalBody/ErrorBody";

class ModalStructure extends Component {
  renderBody() {
    const { error, loading } = this.props;
    if (loading) return <LoadingBody />;
    if (error) return <ErrorBody message={error.message} />;
    return <SuccessBody />;
  }

  render() {
    const { onClose } = this.props;
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">{this.renderBody()}</div>
        <div className="modal-footer">
          <button
            className="modal-close yellow darken-3 btn-flat white-text"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => {
  return {
    loading: surveys.loading,
    error: surveys.error,
  };
};

export default connect(mapStateToProps)(ModalStructure);
