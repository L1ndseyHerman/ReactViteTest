import type { Todo } from "./type";

type TodoItemProp = {
  todo: Todo;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete }: TodoItemProp) => {
  return (
    <div>
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
