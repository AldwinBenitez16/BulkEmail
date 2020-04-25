import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions";
import M from "materialize-css";
import ModalStructure from "./ModalStructure";

import MainProvider from "../.../../../../../utils/combineContext";

class Modal extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems);
  }

  render() {
    const { submitSurvey, formValues } = this.props;
    return (
      <MainProvider>
        <button
          onClick={() => submitSurvey(formValues)}
          data-target="modal1"
          className="green btn-flat right white-text modal-trigger"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
        <ModalStructure />
      </MainProvider>
    );
  }
}

const mapStateToProps = ({ form }) => {
  return {
    formValues: form.surveyForm.values,
  };
};

export default connect(mapStateToProps, actions)(Modal);
