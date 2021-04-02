import "./ToDo.css";

export default function ToDo({ name, onToggleStatus, isDone }) {
  function handleToggleClick() {
    onToggleStatus(name);
  }

  return (
    <li className="to-do-list-item">
      <button className="remove-button">Remove</button>
      <h3>{name}</h3>
      <button className="status-button" onClick={handleToggleClick}>
        {isDone ? "Done" : "Pending"}
      </button>
    </li>
  );
}
