import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";
import App from "../../../App";

describe("Movie App integration tests", () => {
  it("does not add an empty movie", () => {
    render(<App />);

    const addButton = screen.getByText("Add Movie");
    fireEvent.click(addButton);

    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
