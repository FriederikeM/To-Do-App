import "./ToDo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";

export default function ToDo({ name, onToggleStatus, isDone, onDeleteToDo }) {
  function handleDeleteClick() {
    onDeleteToDo(name);
  }

  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";
  const classForText = isDone ? "text-moved" : "text-unmoved";

  const [taskName, setTaskName] = useState(`${name}`);

  function handleNameClick() {
    let newName = prompt("Please enter a new name");
    if (newName !== "" && newName !== null) {
      setTaskName(newName);
    }
  }

  return (
    <li className="to-do-list-item">
      <h3 className={`task-name ${classForText}`} onClick={handleNameClick}>
        {taskName} {isDone ? <AiFillCheckCircle className="checkmark" /> : ""}
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
