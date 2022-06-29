import React from "react";

export default function Task({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div className="card" onClick={handleTodoClick}>
      <fieldset>
        <h3></h3>
        <p>{todo.descript}</p>
        <p>{todo.date}</p>
      </fieldset>
    </div>
  );
}
