import React, { Component } from "react";
import SurveyList from "../surveys/SurveyList";
import SurverNew from "../surveys/SurveyNew";
import ActionButton from "./ActionButton/ActionButton";
import { Provider as DashProvider } from "./DashboardContext";

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
    const value = {
      dashboardShow: this.toogleShowingComponentHandler,
    };
    return (
      <DashProvider value={value}>
        <div className="left-align">
          <SurveyList show={this.state.showSurveyList} />
          <SurverNew show={this.state.showSurveyNew} />
          <ActionButton />
        </div>
      </DashProvider>
    );
  }
}

export default Dashboard;
