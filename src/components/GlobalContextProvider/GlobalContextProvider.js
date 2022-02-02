import { useEffect, useState } from "react";
import globalContext from "../../contexts/globalContext";

const GlobalContextProvider = ({ children }) => {
  const contextValue = {};

  const [number, setNumber] = useState("");
  const [callAvailable, setCallAvailable] = useState(false);
  const [calling, setCalling] = useState(false);
  const [callingTimeoutId, setCallingTimeoutId] = useState();

  const hangAction = () => {
    setCalling(false);
    clearTimeout(callingTimeoutId);
  };

  const callAction = () => {
    if (callAvailable) {
      setCalling(true);
      setCallingTimeoutId(
        setTimeout(() => {
          setCalling(false);
        }, 5000)
      );
    }
  };

  const onKeyClick = (value) => {
    if (value === "delete") {
      if (number !== "") {
        setNumber(Math.floor(number / 10));
      }
    } else if (number.toString().length < 9) {
      setNumber(Number.parseInt(number.toString() + value), 10);
    }
  };

  useEffect(() => {
    if (number.toString().length === 9) {
      setCallAvailable(true);
    } else {
      setCallAvailable(false);
    }
    if (number === 0) {
      setNumber("");
    }
  }, [calling, number]);

  contextValue.callAvailable = callAvailable;
  contextValue.number = number;
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
