import { describe, expect, it } from "vitest";
import { ADD_MOVIE, addMovie } from "../actions";

describe("Movie actions", () => {
  it("add movie action", () => {
    const title = "Inception";

    expect(addMovie(title)).toEqual({ type: ADD_MOVIE, payload: title });
  });
});
