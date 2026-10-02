import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions";

const MovieForm = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addMovie(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter movie name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
