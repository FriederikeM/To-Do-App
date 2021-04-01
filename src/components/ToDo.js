import "./ToDo.css";

export default function ToDo() {
  return (
    <section className="to-do-component">
      <li className="to-do-list-item">
        <button className="remove-button">Remove</button>
        <h3>Input here</h3>
        <button className="status-button">Status</button>
      </li>
    </section>
  );
}
