import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Key from "../Key/Key";

const Keyboard = () => {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "delete"];

  const keyElements = keys.map((key, i) => {
    return <Key key={i} text={key} big={i === keys.length - 1} />;
  });
  return (
    <div className="keyboard-container">
      <ol className="keyboard">{keyElements}</ol>
    </div>
  );
};

export default Keyboard;
