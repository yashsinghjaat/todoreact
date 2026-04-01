const KEY = "todos";

export function getTodos() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function addTodo(todo) {
  const todos = getTodos();
  todos.push(todo);
  localStorage.setItem(KEY, JSON.stringify(todos));
}

export function deleteTodo(id) {
  const todos = getTodos().filter((t) => t.id !== id);
  localStorage.setItem(KEY, JSON.stringify(todos));
}