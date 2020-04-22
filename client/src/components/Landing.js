import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  isAuth() {
    switch (this.props.auth) {
      case false:
        return null;
      default:
        return <Redirect to="/surveys" />;
    }
  }

  render() {
    return (
      <div className="landing">
        {this.isAuth()}
        <h1 className="title">BulkMail</h1>
        <p className="subtitle">
          Collect feedback from thousands of users in an instant.
        </p>
        <p className="subtitle">
          Save time and spend more on what really matters!
        </p>
      </div>
    );
  }
}

//3 make component and return redirect if logged on

const mapStateToProps = (auth) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(Landing);
