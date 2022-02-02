import { useContext } from "react";
import globalContext from "../../contexts/globalContext";

const Display = () => {
  const { number } = useContext(globalContext);
  return <span className="number">{number}</span>;
};

export default Display;
