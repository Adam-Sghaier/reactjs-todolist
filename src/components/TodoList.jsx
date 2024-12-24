import TodoCard from "./TodoCard";
export default function TodoList(props) {
 let {todos, deleteTodo, editTodoValue} = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} todoIndex={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
