import "./ToDo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";

export default function ToDo({ name, onToggleStatus, isDone, onDeleteToDo }) {
  function handleDeleteClick() {
    onDeleteToDo(name);
  }

  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";
  const classForText = isDone ? "text-moved" : "text-unmoved";

  return (
    <li className="to-do-list-item">
      <h3 className={`task-name ${classForText}`}>
        {name} {isDone ? <AiFillCheckCircle className="checkmark" /> : ""}
      </h3>
      <div className="to-do-buttons">
        <button
          className={`status-button ${classForStatus}`}
          onClick={handleToggleClick}
        >
          {isDone ? "Done" : "Pending"}
        </button>
        <button className="remove-button" onClick={handleDeleteClick}>
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
}
