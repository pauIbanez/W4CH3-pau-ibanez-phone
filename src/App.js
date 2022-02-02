import "./App.css";
import Actions from "./components/Actions/Actions";
import Info from "./components/Info/Info";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <div className="container">
      <Info deactivatedClass={"off"} />
      <main className="phone">
        <Keyboard />
        <Actions />
      </main>
    </div>
  );
}

export default App;
