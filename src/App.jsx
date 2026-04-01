import { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo } from "./data";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, []);

  function handleAdd(text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    addTodo(newTodo);
    setTodos(getTodos());
  }

  function handleDelete(id) {
    deleteTodo(id);
    setTodos(getTodos());
  }

  return (
    <div className="container">
      <div className="navbar">
        <h1>Todo App</h1>
      </div>

      <div className="card">
        <AddTodo onAdd={handleAdd} />
        <TodoList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
