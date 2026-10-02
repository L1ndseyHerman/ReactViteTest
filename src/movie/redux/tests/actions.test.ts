import { describe, expect, it } from "vitest";
import { ADD_MOVIE, addMovie, DELETE_MOVIE, deleteMovie } from "../actions";

describe("Movie actions", () => {
  it("add movie action", () => {
    const title = "Inception";

    expect(addMovie(title)).toEqual({ type: ADD_MOVIE, payload: title });
  });

  it("delete movie action", () => {
    const index = 1;

    expect(deleteMovie(index)).toEqual({ type: DELETE_MOVIE, payload: index });
  });
});
