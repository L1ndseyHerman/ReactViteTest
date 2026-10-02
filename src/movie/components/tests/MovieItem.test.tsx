import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import MovieItem from "../MovieItem";
import store from "../../redux/store";
import "@testing-library/jest-dom/vitest";

describe("Movie item", () => {
  it("renders movie item", () => {
    render(
      <Provider store={store}>
        <MovieItem title="Seven" index={0} />
      </Provider>,
    );

    expect(screen.getByText("Seven")).toBeInTheDocument();
  });
});
