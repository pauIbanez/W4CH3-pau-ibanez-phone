import { useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const [calling, setCalling] = useState(false);

  return <globalContext.Provider>{children}</globalContext.Provider>;
};

export default GlobalContextProvider;
