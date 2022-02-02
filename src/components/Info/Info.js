const Info = ({ display, deactivatedClass }) => {
  return (
    <span className={`message${display ? "" : ` ${deactivatedClass}`}`}>
      Calling...
    </span>
  );
};

export default Info;
