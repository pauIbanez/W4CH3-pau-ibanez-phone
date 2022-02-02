import Display from "../Display/Display";

const Actions = () => {
  return (
    <div className="actions">
      <Display />
      {/* <!-- El botón de llamar debe tener la clase "activo" cuando --> */}
      {/* <!-- el número de teléfono tiene 9 cifras --> */}
      <a href="asd" className="call">
        Call
      </a>
      {/* <!-- Sólo se tiene que ver un botón u otro --> */}
      <a href="asd" className="hang active">
        Hang
      </a>
    </div>
  );
};

export default Actions;
