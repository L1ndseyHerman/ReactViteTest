//  I had to add "/vitest" to the end of the import to get it to work, unlike his:
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders counter with initial value", () => {
    render(<Counter initialCount={5} />);
    const countElement = screen.getByTestId("count-value");
    expect(countElement).toHaveTextContent("Count: 5");
  });

  it("increment count when clicking increment button", () => {
    render(<Counter initialCount={0} />);
    const countElement = screen.getByTestId("count-value");

    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("Count: 1");

    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("Count: 2");
  });

  it("decrements count when clicking decrement button", () => {
    render(<Counter initialCount={2} />);
    const countElement = screen.getByTestId("count-value");

    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 1");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 0");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: -1");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: -2");
  });

  afterEach(() => {
    cleanup();
  });
});
