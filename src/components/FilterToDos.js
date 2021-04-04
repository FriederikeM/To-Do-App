import "./FilterToDos.css";

export default function FilterToDos({ filterType, setFilterType }) {
  function handleAllFilterClick() {
    setFilterType("");
  }
  function handleDoneFilterClick() {
    setFilterType(true);
  }
  function handleToDoFilterClick() {
    setFilterType(false);
  }

  let classActiveAllFilter;
  if (filterType === "") {
    classActiveAllFilter = "active-all-filter";
  }
  let classActiveDoneFilter;
  if (filterType === true) {
    classActiveDoneFilter = "active-done-filter";
  }
  let classActiveToDoFilter;
  if (filterType === false) {
    classActiveToDoFilter = "active-to-do-filter";
  }

  return (
    <div className="filter-buttons">
      <button
        className={`all-button ${classActiveAllFilter}`}
        onClick={handleAllFilterClick}
      >
        All
      </button>
      <button
        className={`done-button ${classActiveDoneFilter}`}
        onClick={handleDoneFilterClick}
      >
        Done
      </button>
      <button
        className={`to-do-button ${classActiveToDoFilter}`}
        onClick={handleToDoFilterClick}
      >
        To Do
      </button>
    </div>
  );
}
