import "./FilterToDos.css";

export default function FilterToDos({ onClickAll, onClickDone, onClickToDo }) {
  function handleAllFilterClick() {
    onClickAll();
  }
  function handleDoneFilterClick() {
    onClickDone();
  }
  function handleToDoFilterClick() {
    onClickToDo();
  }
  return (
    <div className="filter-buttons">
      <button className="all-button" onClick={handleAllFilterClick}>
        All
      </button>
      <button className="done-button" onClick={handleDoneFilterClick}>
        Done
      </button>
      <button className="to-do-button" onClick={handleToDoFilterClick}>
        To Do
      </button>
    </div>
  );
}
