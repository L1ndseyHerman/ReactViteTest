import { useState } from "react";
import type { Todo } from "./type";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
