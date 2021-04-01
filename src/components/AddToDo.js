import "./AddToDo.css";
export default function AddToDo() {
  return (
    <div className="add-to-do-wrapper">
      <form>
        <input
          type="text"
          placeholder="Add a to do"
          className="to-do-bar"
          name="to-do"
          id="to-do"
          required
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
}
