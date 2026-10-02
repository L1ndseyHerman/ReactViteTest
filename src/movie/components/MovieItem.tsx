import { useDispatch } from "react-redux";
import { deleteMovie } from "../redux/actions";

type Props = {
  title: string;
  index: number;
};

const MovieItem = ({ title, index }: Props) => {
  const dispatch = useDispatch();

  return (
    <li>
      {title}
      <button onClick={() => dispatch(deleteMovie(index))}>Delete</button>
    </li>
  );
};

export default MovieItem;
