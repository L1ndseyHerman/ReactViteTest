import "./App.css";
import MovieApp from "./movie/components/MovieApp";
import { Provider } from "react-redux";
import store from "./movie/redux/store";

function App() {
  return (
    <Provider store={store}>
      <MovieApp />
    </Provider>
  );
}

export default App;
