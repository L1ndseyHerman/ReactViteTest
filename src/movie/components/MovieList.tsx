import { useSelector } from "react-redux";
import MovieItem from "./MovieItem";
import { selectMovies } from "../redux/selectors";

const MovieList = () => {
  const movies = useSelector(selectMovies);

  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem index={index} title={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
