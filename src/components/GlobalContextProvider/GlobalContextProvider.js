import { useEffect, useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const contextValue = {};

  const [number, setNumber] = useState(123456789);
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

  const onKeyClick = (value) => {
    if (value === "delete" && number.toString().length > 0) {
      setNumber(Math.floor(number / 10));
    } else {
      setNumber(Number.parseInt(number.toString() + value), 10);
    }
  };

  useEffect(() => {
    if (number.toString().length === 9) {
      setCallAvailable(true);
    } else {
      setCallAvailable(false);
    }
  }, [calling, number]);

  contextValue.callAvailable = callAvailable;
  contextValue.number = { number, setNumber };
  contextValue.calling = calling;
  contextValue.callAction = callAction;
  contextValue.hangAction = hangAction;
  contextValue.onKeyClick = onKeyClick;

  return (
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
