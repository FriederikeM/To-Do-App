import "./ToDo.css";

export default function ToDo({ name, onToggleStatus, isDone }) {
  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";

  return (
    <li className={`to-do-list-item ${classForStatus}`}>
      <button className="remove-button">Remove</button>
      <h3>{name}</h3>
      <button className="status-button" onClick={handleToggleClick}>
        {isDone ? "Done" : "Pending"}
      </button>
    </li>
  );
}
