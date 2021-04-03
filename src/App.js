import "./App.css";
import AddToDo from "./components/AddToDo.js";
import ToDoList from "./components/ToDoList.js";
import FilterToDos from "./components/FilterToDos.js";
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

  function handleDeleteToDo(name) {
    const newToDos = toDos.filter((toDo) => toDo.name !== name);
    setToDos(newToDos);
  }

  function handleFilterAll() {
    setToDos(toDos);
  }

  let doneToDos = function handleFilterDone() {
    const doneToDos = toDos.filter((toDo) => toDo.isDone === true);
    setToDos(doneToDos);
  };

  let pendingToDos = function handleFilterToDo() {
    const pendingToDos = toDos.filter((toDo) => toDo.isDone !== true);
    setToDos(pendingToDos);
  };

  return (
    <div className="App">
      <header className="header">
        <AddToDo onAddToDo={handleAddToDos} />
      </header>
      <main className="main">
        <ToDoList
          toDos={toDos}
          onToggleStatus={handleToggleStatus}
          onDeleteToDo={handleDeleteToDo}
        />
      </main>
      <footer className="footer">
        <FilterToDos
          toDos={toDos}
          onClickAll={handleFilterAll}
          onClickDone={doneToDos}
          onClickToDo={pendingToDos}
        />
      </footer>
    </div>
  );
}

export default App;
