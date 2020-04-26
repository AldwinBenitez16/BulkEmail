import React, { Component } from "react";
import { connect } from "react-redux";
import { resetForm } from "../../../../actions/index";
import SuccessBody from "./ModalBody/SuccessBody";
import LoadingBody from "./ModalBody/LoadingBody";
import ErrorBody from "./ModalBody/ErrorBody";
import { Context } from "../../../../utils/combineContext";

class ModalStructure extends Component {
  constructor(props) {
    super(props);

    this.onResetForm = this.onResetForm.bind(this);
  }

  static contextType = Context;

  renderBody() {
    const { error, loading } = this.props;
    if (loading) return <LoadingBody />;
    if (error) return <ErrorBody message={error.message} />;
    return <SuccessBody />;
  }

  onResetForm() {
    const { contextOne, contextTwo } = this.context;
    const { resetForm } = this.props;
    console.log(this.context);
    contextOne.dashboardShow("List");
    contextTwo.surveyShow();
    resetForm("surveyForm", contextTwo.reset);
  }

  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">{this.renderBody()}</div>
        <div className="modal-footer">
          <button
            className="modal-close yellow darken-3 btn-flat white-text"
            onClick={this.onResetForm}
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

export default connect(mapStateToProps, { resetForm })(ModalStructure);
