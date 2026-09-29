//  I had to add "/vitest" to the end of the import to get it to work, unlike his:
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, it, expect } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("Counter component", () => {
  it("initial value is 3", () => {
    const { result } = renderHook(() => useCounter(3));

    expect(result.current.count).toBe(3);
  });

  it("increments correctly", () => {
    const { result } = renderHook(() => useCounter(2));

    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });

  it("decrements correctly", () => {
    const { result } = renderHook(() => useCounter(4));

    act(() => {
      result.current.decrement();
    });
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(2);
  });

  afterEach(() => {
    cleanup();
  });
});
