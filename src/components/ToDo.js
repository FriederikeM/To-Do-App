import "./ToDo.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

export default function ToDo({
  name,
  onToggleStatus,
  isDone,
  onDeleteToDo,
  onNameChanged,
  index,
}) {
  function handleDeleteClick() {
    onDeleteToDo(name);
  }

  function handleToggleClick() {
    onToggleStatus(name);
  }

  const classForStatus = isDone ? "toDo--done" : "toDo--pending";
  const classForText = isDone ? "text-moved" : "text-unmoved";

  function handleNameClick() {
    let changingNameisDone = false;
    while (changingNameisDone === false) {
      let newName = prompt("Please enter a new name");
      if (newName !== "" && newName !== null) {
        changingNameisDone = onNameChanged(newName, index);
      }
    }
  }

  return (
    <li className="to-do-list-item">
      <h3 className={`task-name ${classForText}`}>
        {name}
        <MdEdit className="edit" onClick={handleNameClick} />
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
