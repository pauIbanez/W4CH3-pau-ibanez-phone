import Display from "../Display/Display";

const Actions = ({ calling, callAvailable }) => {
  return (
    <div className="actions">
      <Display />
      {calling ? (
        
      ) : (
        <a href="asd" className={`call${callAvailable ? "active" : ""}`}>
          Call
        </a>
      )}
    </div>
  );
};

export default Actions;
