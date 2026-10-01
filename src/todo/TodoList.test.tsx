import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";
import "@testing-library/jest-dom/vitest";

describe("TodoList integration test", () => {
  it("does not add an empty todo", () => {
    render(<TodoList />);

    const addButton = screen.getByText("Add todo");

    fireEvent.click(addButton);

    expect(screen.queryByTestId("todo-item")).toBe(null);
  });

  it("adds a new todo when form is submitted with some text", () => {
    render(<TodoList />);

    const inputBox = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByText("Add todo");

    fireEvent.change(inputBox, { target: { value: "Buy Pizza!" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Buy Pizza!")).toBeInTheDocument();
  });

  it("deletes a todo when delete button is clicked", () => {
    render(<TodoList />);

    const inputBox = screen.getByPlaceholderText("Enter a todo");
    const addButton = screen.getByText("Add todo");

    fireEvent.change(inputBox, { target: { value: "Buy Pizza!" } });
    fireEvent.click(addButton);

    fireEvent.change(inputBox, { target: { value: "Buy Milk" } });
    fireEvent.click(addButton);

    const deleteButtons = screen.getAllByText("Delete");
    expect(deleteButtons).toHaveLength(2);

    fireEvent.click(deleteButtons[0]);

    expect(screen.queryByText("Buy Pizza!")).toBe(null);
    expect(screen.getByText("Buy Milk")).toBeInTheDocument();
  });
});
