import React, { Component } from "react";
import SurveyList from "../surveys/SurveyList";
import SurverNew from "../surveys/SurveyNew";
import ActionButton from "./ActionButton/ActionButton";
import { DashProvider } from "./DashboardContext";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSurveyList: true,
      showSurveyNew: false,
      showSurveyDraft: false,
    };

    this.toogleShowingComponentHandler = this.toogleShowingComponentHandler.bind(
      this
    );
  }

  toogleShowingComponentHandler(type) {
    const state = this.state;
    for (const survey in state) {
      state[survey] = false;
    }
    this.setState({
      ...state,
      [`showSurvey${type}`]: true,
    });
  }

  render() {
    const contextValues = {
      show: this.toogleShowingComponentHandler,
    };

    return (
      <DashProvider value={contextValues}>
        <div>
          <SurveyList show={this.state.showSurveyList} />
          <SurverNew show={this.state.showSurveyNew} />
          <ActionButton />
        </div>
      </DashProvider>
    );
  }
}

export default Dashboard;
