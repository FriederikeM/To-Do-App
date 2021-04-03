import "./FilterToDos.css";

export default function FilterToDos({ setFilterType }) {
  function handleAllFilterClick() {
    setFilterType("");
  }
  function handleDoneFilterClick() {
    setFilterType(true);
  }
  function handleToDoFilterClick() {
    setFilterType(false);
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
