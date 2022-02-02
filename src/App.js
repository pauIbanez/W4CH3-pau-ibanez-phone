import "./App.css";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="container">
      <Info display={true} deactivatedClass={"off"} />
      <main className="phone">
        <Actions />
      </main>
    </div>
  );
}

export default App;
