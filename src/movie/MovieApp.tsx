import MovieForm from "./MovieForm";
import MovieList from "./MovieList";

const MovieApp = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <MovieForm />
      <MovieList />
    </div>
  );
};

export default MovieApp;
