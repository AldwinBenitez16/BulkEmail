import React, { Component, Fragment } from "react";
import M from "materialize-css";

class Dropdown extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems);
  }

  render() {
    const { name } = this.props;
    return (
      <Fragment>
        <a className="dropdown-trigger btn" data-target="dropdown1">
          {name}
        </a>

        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a>{name}</a>
          </li>
          <li className="divider" tabIndex="-1"></li>
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Dropdown;
