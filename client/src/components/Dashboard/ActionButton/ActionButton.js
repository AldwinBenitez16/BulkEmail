import React, { Component } from "react";
import ButtonList from "./ButtonList/ButtonList";

class ActionButton extends Component {
  render() {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large grey">
          <i className="large material-icons">settings</i>
        </a>
        <ButtonList />
      </div>
    );
  }
}

export default ActionButton;
