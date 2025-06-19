import { useState } from "react";
import "./App.css";
import ToDoListItem from "./components/ToDoListItem";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDoItems, setToDoItems] = useState([
    { title: title, description: description },
  ]);

  // event handler to get value for title
  function handleTitleChange(ev) {
    setTitle(ev.target.value);
  }

  // event handler to get value for description
  function handleDescriptionChange(ev) {
    setDescription(ev.target.value);
  }

  // event handler for what happens when 'add item' button is clicked
  function handleAddItem(ev) {
    ev.preventDefault();

    const newToDo = { title: title, description: description };

    setToDoItems(function (previousToDoItems) {
      return [...previousToDoItems, newToDo];
    });

    setDescription("");
    setTitle("");
  }

  return (
    <>
      <h1 className="app-header">To-Do Application</h1>

      {/* tried to have the form as an external component, but ran into issues */}

      <section className="to-do-form-section">
        <form className="to-do-form">
          <input
            type="text"
            placeholder="Title"
            className="title-input form-input"
            value={title}
            onChange={handleTitleChange}
          />
          <input
            type="text"
            placeholder="Description"
            className="description-input form-input"
            value={description}
            onChange={handleDescriptionChange}
          />
          <button className="add-item-btn" onClick={handleAddItem}>
            Add Item
          </button>
        </form>
      </section>

      {/* The to-do Items created */}

      {toDoItems.map((item, idx) => (
        <ToDoListItem
          key={idx}
          title={item.title}
          description={item.description}
        />
      ))}
    </>
  );
}

export default App;
