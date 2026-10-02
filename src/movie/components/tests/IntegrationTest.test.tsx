import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../../../App";
import store from "../../redux/store";

describe("Movie App integration tests", () => {
  beforeEach(() => {
    store.dispatch({ type: "RESET" });
  });

  it("does not add an empty movie", () => {
    render(<App />);

    const addButton = screen.getByText("Add Movie");
    fireEvent.click(addButton);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });

  it("adds a new movie when form is submitted", () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText("Enter movie name");
    const addButton = screen.getByText("Add Movie");

    fireEvent.change(inputBox, { target: { value: "Pulp fiction" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Pulp fiction")).toBeInTheDocument();
  });

  it("deletes a movie when delete button is clicked", () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText("Enter movie name");
    const addButton = screen.getByText("Add Movie");

    fireEvent.change(inputBox, { target: { value: "Memento" } });
    fireEvent.click(addButton);

    fireEvent.change(inputBox, { target: { value: "Holiday" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getAllByText("Delete");

    expect(deleteButton).toHaveLength(2);

    fireEvent.click(deleteButton[0]);

    expect(screen.queryByText("Memento")).toBe(null);
    expect(screen.getByText("Holiday")).toBeInTheDocument();
  });
});
