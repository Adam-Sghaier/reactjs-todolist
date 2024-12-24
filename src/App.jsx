import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistTodos(newTodos) {
    localStorage.setItem("todos", JSON.stringify({ todos: newTodos }));
  }

  function addNewTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  function editTodoValue(index) {
    const valuetoBeEdited = todos[index];
    setTodoValue(valuetoBeEdited);
    deleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        addNewTodo={addNewTodo}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodoValue={editTodoValue}
      />
    </>
  );
}

export default App;
