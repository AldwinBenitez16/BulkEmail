import React from "react";

const DashContext = React.createContext();

export const DashProvider = DashContext.Provider;
export const DashConsumer = DashContext.Consumer;

export default DashContext;
