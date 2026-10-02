import MovieItem from "./MovieItem";

const MovieList = () => {
  const movies = ["Interstellar", "Fight club"];

  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem index={index} title={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
