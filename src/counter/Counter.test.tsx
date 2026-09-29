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
    render(<Counter initialCount={6} />);
    const countElement = screen.getByTestId("count-value");

    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 5");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 4");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 3");

    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 2");

    expect(decrementButton).not.toBeDisabled();
  });

  it("shouldn't go below zero when clicking the decrement button", () => {
    render(<Counter initialCount={1} />);
    const countElement = screen.getByTestId("count-value");

    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);
    expect(countElement).toHaveTextContent("Count: 0");
    expect(decrementButton).toBeDisabled();
  });

  it("does not increment above max count", () => {
    render(<Counter initialCount={8} maxCount={10} />);
    const countElement = screen.getByTestId("count-value");

    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(countElement).toHaveTextContent("Count: 10");
    expect(incrementButton).toBeDisabled();
  });

  it("reset button resets the count to initial value", () => {
    render(<Counter initialCount={5} />);
    const countElement = screen.getByTestId("count-value");

    const incrementButton = screen.getByText("Increment");
    const resetButton = screen.getByText("Reset");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    expect(countElement).toHaveTextContent("Count: 7");
    fireEvent.click(resetButton);

    expect(countElement).toHaveTextContent("Count: 5");
  });

  afterEach(() => {
    cleanup();
  });
});
