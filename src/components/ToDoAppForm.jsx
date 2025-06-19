function ToDoAppForm() {
  return (
    <section className="to-do-form-section">
      <form className="to-do-form">
        <input
          type="text"
          placeholder="Title"
          className="title-input form-input"
        />
        <input
          type="text"
          placeholder="Description"
          className="description-input form-input"
        />
        <button className="add-item-btn">Add Item</button>
      </form>
    </section>
  );
}

export default ToDoAppForm;
