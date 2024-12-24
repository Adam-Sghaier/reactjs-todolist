import { useState } from "react";

export default function TodoInput(props) {
  const { addNewTodo ,todoValue, setTodoValue } = props;
  
  return (
    <header>
      <input
        value={todoValue}
        type="text"
        placeholder="Enter your todo"
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addNewTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
