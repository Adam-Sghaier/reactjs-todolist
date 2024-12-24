export default function TodoCard(props) {
  const { children, deleteTodo, editTodoValue, todoIndex } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={() => editTodoValue(todoIndex)}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={() => deleteTodo(todoIndex)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
