import "./App.css";
import AddToDo from "./components/AddToDo.js";
import ToDoList from "./components/ToDoList.js";
import FilterToDos from "./components/FilterToDos.js";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [filterType, setFilterType] = useState("");

  function handleAddToDos(name) {
    const newTodos = [...toDos, { name: name, isDone: false }];
    setToDos(newTodos);
    for (let i = 0; i < newTodos.length; i++) {
      newTodos[i].index = i;
    }
    toDos.forEach((toDo) => {
      if (name === toDo.name) {
        alert(
          "Oops! you have already created this task, please choose a different name"
        );
        setToDos(toDos);
      }
    });
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

  let filterToDos;

  if (filterType === true) {
    filterToDos = toDos.filter((toDo) => toDo.isDone === true);
  } else if (filterType === false) {
    filterToDos = toDos.filter((toDo) => toDo.isDone !== true);
  } else {
    filterToDos = toDos;
  }

  function handleNameChange(newName, index) {
    toDos.forEach((toDo) => {
      if (newName === toDo.name) {
        alert(
          "Oops! you have already created this task, please choose a different name"
        );
        return {
          ...toDo,
          name: toDo.name,
        };
        setToDos(toDos);
      } else {
        const newTodoName = toDos.map((toDo) => {
          if (toDo.index === index) {
            return {
              ...toDo,
              name: newName,
            };
          } else {
            return toDo;
          }
        });
        setToDos(newTodoName);
      }
    });
  }

  return (
    <div className="App">
      <header className="header">
        <AddToDo onAddToDo={handleAddToDos} />
      </header>
      <main className="main">
        <ToDoList
          toDos={filterToDos}
          onToggleStatus={handleToggleStatus}
          onDeleteToDo={handleDeleteToDo}
          handleNameChange={handleNameChange}
        />
      </main>
      <footer className="footer">
        <FilterToDos setFilterType={setFilterType} filterType={filterType} />
      </footer>
    </div>
  );
}

export default App;
