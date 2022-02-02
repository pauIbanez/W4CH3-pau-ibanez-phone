import { useEffect, useMemo, useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const contextValue = {};

  const [number, setNumber] = useState("");
  const [callAvailable, setCallAvailable] = useState(false);
  const [calling, setCalling] = useState(false);

  const hangAction = () => {
    setCalling(false);
  };

  const callAction = () => {
    if (callAvailable) {
      setCalling(true);
    }
  };

  contextValue.callAvailable = callAvailable;
  contextValue.number = { number, setNumber };
  contextValue.calling = calling;
  contextValue.callAction = callAction;
  contextValue.hangAction = hangAction;

  return (
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
