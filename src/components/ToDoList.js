import ToDo from "./ToDo.js";

export default function ToDoList({ toDos, onToggleStatus, onDeleteToDo }) {
  function renderToDos() {
    return toDos.map((toDo, index) => {
      return (
        <ToDo
          key={toDo.name}
          name={toDo.name}
          onToggleStatus={onToggleStatus}
          isDone={toDo.isDone}
          onDeleteToDo={onDeleteToDo}
        />
      );
    });
  }

  return <ul className="toDoList">{renderToDos()}</ul>;
}
