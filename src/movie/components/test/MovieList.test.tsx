import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import store from "../../redux/store";
import "@testing-library/jest-dom/vitest";
import MovieList from "../MovieList";

describe("Movie List", () => {
  it("renders movie item", () => {
    render(
      <Provider store={store}>
        <MovieList />
      </Provider>,
    );

    //  This test causes a warning about the store state but he says it's fine?
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
