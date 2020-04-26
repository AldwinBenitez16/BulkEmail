import React, { createContext } from "react";

import { Consumer as ConsumerOne } from "../components/Dashboard/DashboardContext";
import { Consumer as ConsumerTwo } from "../components/surveys/SurveyContext";

export const Context = createContext();

const MainProvider = (props) => {
  return (
    <ConsumerOne>
      {(contextOne) => (
        <ConsumerTwo>
          {(contextTwo) => (
            <Context.Provider value={{ contextOne, contextTwo }}>
              {props.children}
            </Context.Provider>
          )}
        </ConsumerTwo>
      )}
    </ConsumerOne>
  );
};

export default MainProvider;
