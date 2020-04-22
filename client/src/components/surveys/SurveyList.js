import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    const { surveys } = this.props;
    return surveys.reverse().map((survey) => {
      return (
        <div className="card blue-grey darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  showSurvey() {
    const { show } = this.props;
    if (show) {
      return this.renderSurveys();
    }
  }

  render() {
    return <div>{this.showSurvey()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys: surveys.surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
