import "./ToDo.css";

export default function ToDo({ name, onToggleStatus, isDone }) {
  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";

  return (
    <li className="to-do-list-item">
      <button className="remove-button">Remove</button>
      <h3>{name}</h3>
      <button
        className={`status-button ${classForStatus}`}
        onClick={handleToggleClick}
      >
        {isDone ? "Done" : "Pending"}
      </button>
    </li>
  );
}
