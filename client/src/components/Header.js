import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent = () => {
    console.log(this.props.auth);
    switch (this.props.auth) {
      case null:
        return "loading";
      case false:
        return "loggedout";
      default:
        return "loggedin";
    }
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">BulkMail</a>
          <ul className="right">
            <li>
              <a>{this.renderContent()}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
