import React from "react";

const DashContext = React.createContext();

const Provider = DashContext.Provider;
const Consumer = DashContext.Consumer;

export { DashContext, Provider, Consumer };
