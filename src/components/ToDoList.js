import ToDo from "./ToDo.js";

export default function ToDoList({
  toDos,
  onToggleStatus,
  onDeleteToDo,
  onNameChanged,
}) {
  function renderToDos() {
    return toDos.map((toDo, index) => {
      return (
        <ToDo
          index={toDo.index}
          name={toDo.name}
          onToggleStatus={onToggleStatus}
          isDone={toDo.isDone}
          onDeleteToDo={onDeleteToDo}
          onNameChanged={onNameChanged}
        />
      );
    });
  }

  return <ul className="toDoList">{renderToDos()}</ul>;
}
