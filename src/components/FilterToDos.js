import "./FilterToDos.css";

export default function FilterToDos() {
  return (
    <div className="filter-buttons">
      <button className="all-button">All</button>
      <button className="done-button">Done</button>
      <button className="to-do-button">To Do</button>
    </div>
  );
}
