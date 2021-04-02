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

  function handleToggleStatus(name) {
    const newToDos = toDos.map((toDo) => {
      if (toDo.name === name) {
        return { ...toDo, isDone: !toDo.isDone };
      } else {
        return toDo;
      }
    });

    setToDos(newToDos);
  }

  return (
    <div className="App">
      <header className="header">
        <AddToDo onAddToDo={handleAddToDos} />
      </header>
      <main className="main">
        <ToDoList toDos={toDos} onToggleStatus={handleToggleStatus} />
      </main>
    </div>
  );
}

export default App;
