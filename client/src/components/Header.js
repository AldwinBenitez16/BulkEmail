import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">BulkMail</a>
          <ul className="right">
            <li>
              <a>OAuth Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
