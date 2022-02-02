import { useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const contextValue = {};
  const [calling, setCalling] = useState(false);

  contextValue.calling = { calling, setCalling };

  return (
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
