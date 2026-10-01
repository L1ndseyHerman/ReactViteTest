import { useState } from "react";
import type { Todo } from "./type";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoList;
