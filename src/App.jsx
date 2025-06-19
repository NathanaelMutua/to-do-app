import { useState } from "react";
import "./App.css";
import ToDoAppForm from "./components/ToDoAppForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="app-header">To-Do Application</h1>
      <ToDoAppForm />
    </>
  );
}

export default App;
