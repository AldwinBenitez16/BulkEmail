import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
const Dashboard = () => <h2>Dashboard</h2>;
const SurverNew = () => <h2>SurverNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurverNew} />
            <Route path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: dispatch(actions.fetchUser())
  };
};

export default connect(null, actions)(App);
