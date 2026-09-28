//  I had to add "/vitest" to the end of the import to get it to work, unlike his:
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter component", () => {
  it("renders counter with initial value", () => {
    render(<Counter initialCount={5} />);
    const countElement = screen.getByTestId("count-value");
    expect(countElement).toHaveTextContent("Count: 5");
  });

  afterEach(() => {
    cleanup();
  });
});

//  Has a state
//  Displays current count
