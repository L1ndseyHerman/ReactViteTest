//  I had to add "/vitest" to the end of the import to get it to work, unlike his:
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, it, expect } from "vitest";
import { cleanup, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("Counter component", () => {
  it("initial value is 3", () => {
    const { result } = renderHook(() => useCounter(3));

    expect(result.current.count).toBe(3);
  });

  afterEach(() => {
    cleanup();
  });
});
