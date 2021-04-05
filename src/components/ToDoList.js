import ToDo from "./ToDo.js";

export default function ToDoList({
  toDos,
  onToggleStatus,
  onDeleteToDo,
  handleNameChange,
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
          handleNameChange={handleNameChange}
        />
      );
    });
  }

  return <ul className="toDoList">{renderToDos()}</ul>;
}
