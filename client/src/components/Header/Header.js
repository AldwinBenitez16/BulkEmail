import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "../Payments";

import Dropdown from "./Dropdown/Dropdown";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li className="masking-link">
            <a href="/auth/google" title="Login">
              <i className="material-icons" title="account_circle">
                account_circle
              </i>
              Login
            </a>
          </li>,
        ];
      default:
        return [
          <li key="credits" style={{ marginRight: "10px" }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="payments">
            <Payments />
          </li>,
          <li key="dropdown">
            <Dropdown name={this.props.auth.name} />
          </li>,
        ];
    }
  };

  componentDidMount() {
    const elem = document.querySelector(".skewed-nav");
    elem.addEventListener("mouseover", () => {
      elem.classList.add("background-red");
    });
    elem.addEventListener("mouseleave", () => {
      elem.classList.remove("background-red");
    });
  }

  render() {
    return (
      <nav className="skewed-box-top skewed-nav">
        <div className="skewed-container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            BulkMail
          </Link>
          <ul>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
