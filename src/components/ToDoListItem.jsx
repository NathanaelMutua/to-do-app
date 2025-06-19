function ToDoListItem({ title, description }) {
  return (
    <section className="to-do-list">
      <div className="to-do-list-section">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ToDoListItem;
