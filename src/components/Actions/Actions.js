import Display from "../Display/Display";

const Actions = ({ calling }) => {
  return (
    <div className="actions">
      <Display />
      {calling ? (
        <a href="asd" className="hang active">
          Hang
        </a>
      ) : (
        <a href="asd" className="call">
          Call
        </a>
      )}
    </div>
  );
};

export default Actions;
