import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TodoList from "./TodoList";

describe("TodoList integration test", () => {
  it("does not add an empty todo", () => {
    render(<TodoList />);

    const addButton = screen.getByText("Add todo");

    fireEvent.click(addButton);

    expect(screen.queryByTestId("todo-item")).toBe(null);
  });
});
