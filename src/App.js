import "./App.css";
import AddToDo from "./components/AddToDo.js";
import ToDoList from "./components/ToDoList.js";

function App() {
  return (
    <div className="App">
      <header className="header">
        <AddToDo />
      </header>
      <main className="main">
        <ul>
          <ToDoList />
        </ul>
      </main>
    </div>
  );
}

export default App;
