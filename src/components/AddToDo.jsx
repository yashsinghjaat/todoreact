import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        type="text"
        placeholder="Tell me new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn">Add</button>
    </form>
  );
}

export default AddTodo;
