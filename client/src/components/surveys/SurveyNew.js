import React, { Component } from "react";
import { reduxForm, reset } from "redux-form";
import SurveyForm from "./SurveyForm/SurveyForm";
import SurveyFormReview from "./SurveyForm/SurveyFormReview";

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

  renderForm() {
    if (this.state.showReview) {
      return <SurveyFormReview onCancel={this.toggleShowReview} />;
    }
    return <SurveyForm onSurveySubmit={this.toggleShowReview} />;
  }

  showContent() {
    const { show } = this.props;
    if (show) {
      return this.renderForm();
    }
  }

  render() {
    return <div>{this.showContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm",
})(Surveynew);
