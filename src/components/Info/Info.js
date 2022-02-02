import { useContext } from "react";
import globalContext from "../../contexts/globalContext";

const Info = ({ deactivatedClass }) => {
  const { calling } = useContext(globalContext);

  return (
    <span className={`message${calling ? "" : ` ${deactivatedClass}`}`}>
      Calling...
    </span>
  );
};

export default Info;
