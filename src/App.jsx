import { useState } from "react";
import "./App.css";
import ToDoAppForm from "./components/ToDoAppForm";
import ToDoListItem from "./components/ToDoListItem";

function App() {
  return (
    <>
      <h1 className="app-header">To-Do Application</h1>
      <ToDoAppForm />
      <ToDoListItem
        title="Moving Out"
        description="Gather all usable items and pack for the movers"
      />
    </>
  );
}

export default App;
