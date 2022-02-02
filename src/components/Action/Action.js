import { useContext } from "react";
import globalContext from "../../contexts/globalContext";

const Action = ({ text, className, actionOnClick }) => {
  const { callAvailable } = useContext(globalContext);

  const actualClass =
    text === "Call"
      ? `${className}${callAvailable ? " active" : ""}`
      : `${className} active`;

  return (
    <a
      href="asd"
      onClick={(event) => {
        event.preventDefault();
        actionOnClick();
      }}
      className={actualClass}
    >
      {text}
    </a>
  );
};
export default Action;
