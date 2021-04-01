import "./App.css";
import AddToDo from "./components/AddToDo.js";
import ToDoList from "./components/ToDoList.js";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  function handleAddToDos(taskName) {
    const newTodos = [...toDos, { name: taskName, isDone: false }];
    setToDos(newTodos);
  }

  return (
    <div className="App">
      <header className="header">
        <AddToDo onAddToDo={handleAddToDos} />
      </header>
      <main className="main">
        <ToDoList toDos={toDos} />
      </main>
    </div>
  );
}

export default App;
