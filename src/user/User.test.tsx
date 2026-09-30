import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import User from "./User";
import "@testing-library/jest-dom/vitest";

describe("User component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it("fetches and displays the user data", async () => {
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        json: async () => ({ id: 4, name: "Amir", email: "amir@gmail.com" }),
      } as Response);
    });

    render(<User id={4} />);

    expect(screen.getByText(/loading/)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Amir" })).toBeInTheDocument();
      expect(screen.getByText(/amir@gmail.com/)).toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
});
