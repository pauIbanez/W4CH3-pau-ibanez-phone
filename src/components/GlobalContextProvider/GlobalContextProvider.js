import { useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const contextValue = {};
  const [number, setNumber] = useState();

  contextValue.number = { number, setNumber };

  return (
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
