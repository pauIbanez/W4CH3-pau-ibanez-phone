import { useContext } from "react";
import globalContext from "../../contexts/globalContext";
import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = ({ calling }) => {
  const { hangAction } = useContext(globalContext);
  const { callAction } = useContext(globalContext);

  const action = calling ? (
    <Action text={"Hang"} className={"hang"} actionOnClick={hangAction} />
  ) : (
    <Action text={"Call"} className={"call"} actionOnClick={callAction} />
  );

  return (
    <div className="actions">
      <Display />
      {action}
    </div>
  );
};

export default Actions;
