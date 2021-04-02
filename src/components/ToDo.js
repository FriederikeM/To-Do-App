import "./ToDo.css";

export default function ToDo({ name, onToggleStatus, isDone, onDeleteToDo }) {
  function handleDeleteClick() {
    onDeleteToDo(name);
  }

  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";

  return (
    <li className="to-do-list-item">
      <h3 className="task-name">{name}</h3>
      <div className="to-do-buttons">
        <button
          className={`status-button ${classForStatus}`}
          onClick={handleToggleClick}
        >
          {isDone ? "Done" : "Pending"}
        </button>
        <button className="remove-button" onClick={handleDeleteClick}>
          X
        </button>
      </div>
    </li>
  );
}
