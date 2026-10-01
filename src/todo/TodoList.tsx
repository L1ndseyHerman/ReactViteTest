import { useState } from "react";
import type { Todo } from "./type";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onAdd = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} onDelete={onDelete} />
      ))}

      <AddTodo onAdd={onAdd} />
    </div>
  );
};

export default TodoList;
