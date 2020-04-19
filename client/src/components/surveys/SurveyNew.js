import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class Surveynew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showReview: false,
    };
    this.toggleShowReview = this.toggleShowReview.bind(this);
  }

  toggleShowReview() {
    this.setState((prevState) => ({
      showReview: !prevState.showReview,
    }));
  }

  renderContent() {
    if (this.state.showReview) {
      return <SurveyFormReview onCancel={this.toggleShowReview} />;
    }

    return <SurveyForm onSurveySubmit={this.toggleShowReview} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(Surveynew);