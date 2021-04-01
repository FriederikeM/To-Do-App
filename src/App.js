import "./App.css";
import AddToDo from "./components/AddToDo.js";
import ToDo from "./components/ToDo.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <AddToDo />
      </header>
      <main className="main">
        <ul>
          <ToDo />
        </ul>
      </main>
    </div>
  );
}

export default App;
