import ToDo from "./ToDo.js";

export default function ToDoList({ toDos }) {
  function renderToDos() {
    return toDos.map((toDo, index) => {
      return <ToDo key={toDo.name} name={toDo.name} />;
    });
  }

  return <ul className="toDoList">{renderToDos()}</ul>;
}
