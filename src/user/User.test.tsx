import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, it, vi } from "vitest";
import User from "./User";

describe("User component", () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
  });

  it("fetches and displays the user data", () => {
    globalThis.fetch = vi.fn(() => {
      return Promise.resolve({
        json: async () => ({ id: 4, name: "Amir", email: "amir@gmail.com" }),
      } as Response);
    });

    render(<User id={4} />);
  });

  afterEach(() => {
    vi.resetAllMocks();
  });
});
