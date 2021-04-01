import "./ToDo.css";

export default function ToDo({ name }) {
  return (
    <section className="to-do-component">
      <li className="to-do-list-item">
        <button className="remove-button">Remove</button>
        <h3>{name}</h3>
        <button className="status-button">Status</button>
      </li>
    </section>
  );
}
