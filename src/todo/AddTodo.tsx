import { useState } from "react";

type AddTodoProps = {
  onAdd: (text: string) => void;
};

const AddTodo = ({ onAdd }: AddTodoProps) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //  Stops the page from reloading, need this in vanilla JS, don't React.
    e.preventDefault();
    if (!text.trim()) {
      return;
    }

    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddTodo;
