import type { Todo } from "./type";

type TodoItemProp = {
  todo: Todo;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete }: TodoItemProp) => {
  return (
    <div data-testid="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
