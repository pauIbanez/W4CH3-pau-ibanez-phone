import "./App.css";

function App() {
  return (
    <div className="container">
      <span className="message">Calling...</span>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <li>
              <button className="key">1</button>
            </li>
            <li>
              <button className="key">2</button>
            </li>
            <li>
              <button className="key">3</button>
            </li>
            <li>
              <button className="key">4</button>
            </li>
            <li>
              <button className="key">5</button>
            </li>
            <li>
              <button className="key">6</button>
            </li>
            <li>
              <button className="key">7</button>
            </li>
            <li>
              <button className="key">8</button>
            </li>
            <li>
              <button className="key">9</button>
            </li>
            <li>
              <button className="key">0</button>
            </li>
            <li>
              <button className="key big">delete</button>
            </li>
          </ol>
        </div>
        <div className="actions">
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
      </main>
    </div>
  );
}

export default App;
