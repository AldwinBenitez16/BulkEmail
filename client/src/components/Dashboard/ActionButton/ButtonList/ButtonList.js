import React, { Component } from "react";
import M from "materialize-css";
import Context from "../../DashboardContext";

const BUTTONLIST = [
  {
    title: "Drafts",
    addClass: "yellow darken-1",
    icon: "filter_none",
    showName: "Draft",
  },
  {
    title: "Surveys",
    addClass: "blue darken-1",
    icon: "mail",
    showName: "List",
  },
  {
    title: "New Survey",
    addClass: "red darken-1",
    icon: "add",
    showName: "New",
  },
];

class ButtonList extends Component {
  static contextType = Context;

  componentDidMount() {
    let elems = document.querySelectorAll(".fixed-action-btn");
    M.FloatingActionButton.init(elems, {
      direction: "top",
      hoverEnabled: false,
    });
  }

  renderButtons = () => {
    const { dashboardShow } = this.context;
    return BUTTONLIST.map(({ title, addClass, icon, showName }) => (
      <li title={title} key={title}>
        <a className={`btn-floating ${addClass}`}>
          <i onClick={() => dashboardShow(showName)} className="material-icons">
            {icon}
          </i>
        </a>
      </li>
    ));
  };

  render() {
    return <ul>{this.renderButtons()}</ul>;
  }
}

export default ButtonList;
