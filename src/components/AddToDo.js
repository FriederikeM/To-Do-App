import "./AddToDo.css";
export default function AddToDo({ onAddToDo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formInput = form.toDo.value;
    onAddToDo(formInput);
    form.reset();
  }

  return (
    <form className="add-to-do-wrapper" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a to do"
        className="to-do-bar"
        name="toDo"
        id="toDo"
        required
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}
