import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header/Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard/Dashboard";

import Main from "./hoc/Main";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="skewed-background">
        <BrowserRouter>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
