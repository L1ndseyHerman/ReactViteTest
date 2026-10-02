import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { describe, expect, it } from "vitest";
import store from "../../redux/store";
import "@testing-library/jest-dom/vitest";
import MovieForm from "../MovieForm";

describe("Movie Form", () => {
  it("renders movie item", () => {
    render(
      <Provider store={store}>
        <MovieForm />
      </Provider>,
    );

    expect(screen.getByPlaceholderText("Enter movie name")).toBeInTheDocument();
  });
});
