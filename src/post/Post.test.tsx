import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Post from "./Post";
import "@testing-library/jest-dom/vitest";

describe("User component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it("renders the post data correctly", async () => {
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        ok: true,
        json: async () => ({
          title: "My post",
          body: "Testing is fun!",
        }),
      } as Response);
    });

    render(<Post id={9} />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
      expect(screen.getByText("Title: My post")).toBeInTheDocument();
    });
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
});
