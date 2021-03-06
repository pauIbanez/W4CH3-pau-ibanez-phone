import { useContext } from "react";
import globalContext from "../../contexts/globalContext";

const Key = ({ big, text }) => {
  const { onKeyClick } = useContext(globalContext);
  return (
    <li onClick={() => onKeyClick(text)}>
      <button className={`key${big ? " big" : ""}`}>{text}</button>
    </li>
  );
};

export default Key;
