import ToDo from "./ToDo.js";

export default function ToDoList({ toDos, onToggleStatus }) {
  function renderToDos() {
    return toDos.map((toDo, index) => {
      return (
        <ToDo
          key={toDo.name}
          name={toDo.name}
          onToggleStatus={onToggleStatus}
          isDone={toDo.isDone}
        />
      );
    });
  }

  return <ul className="toDoList">{renderToDos()}</ul>;
}
