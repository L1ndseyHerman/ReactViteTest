//  I had to add "/vitest" to the end of the import to get it to work, unlike his:
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe("test Greeting component", () => {
  it("it should render correctly", () => {
    render(<Greetings />);
    const element = screen.getByText(/Hello/);

    expect(element).toBeInTheDocument();
  });

  afterEach(() => {
    cleanup();
  });
});
